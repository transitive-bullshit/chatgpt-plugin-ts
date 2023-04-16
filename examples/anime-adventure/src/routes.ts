import { OpenAPIRoute, Query, Str } from '@cloudflare/itty-router-openapi'
import Anilist from 'anilist-node'
import { nanoid } from 'nanoid'

// import { isValidChatGPTIPAddress } from 'chatgpt-plugin'
import * as types from './types'
import * as utils from './utils'
import { getActions } from './actions'

export class StartGame extends OpenAPIRoute {
  static schema = {
    summary:
      'Starts a new game of Anime Adventure. The user must provide the name of an Anime that they want to base the game around. You should use the anime metadata that is returned to start a story set in the world of this anime. It also returns "actions" which are very important. Your story should focus on giving the user the option to choose between the given actions in order to continue the story. The user will click on a given "actionUrl" and future invocations of this ',
    parameters: {
      anime: Query(
        new Str({
          description: 'Name of the anime show',
          example: 'cowboy bebop'
        }),
        {
          required: true
        }
      )
    },
    responses: {
      '200': {
        schema: {
          actions: [
            {
              id: new Str(),
              actionUrl: new Str({
                description: 'URL of the action to perform'
              }),
              imageUrl: new Str({
                description: 'Image preview of the action'
              }),
              name: new Str({ description: 'Name of the action to perform' }),
              description: new Str()
            }
          ],
          anime: {
            id: new Str(),
            title: new Str({
              description: 'Official title of the anime'
            }),

            description: new Str({
              description: "Overview of the show and it's plot"
            }),

            genres: [new Str()],
            tags: [new Str()],
            characters: [new Str()],
            reviews: [
              {
                summary: new Str(),
                body: new Str()
              }
            ]
          }
        }
      }
    }
  }

  async handle(request: Request, env: any, _ctx, data: Record<string, any>) {
    const anilistAccessToken = env.ANILIST_ACCESS_TOKEN
    if (!anilistAccessToken) {
      return new Response('ANILIST_ACCESS_TOKEN not set', { status: 500 })
    }

    const host = request.headers.get('host')
    const ip = request.headers.get('Cf-Connecting-Ip')
    if (!ip) {
      console.warn('search error missing IP address')
      return new Response('invalid source IP', { status: 500 })
    }

    // TODO: protect against abuse in prod
    // if (env.ENVIRONMENT === 'production' && !isValidChatGPTIPAddress(ip)) {
    //   // console.warn('search error invalid IP address', ip)
    //   return new Response(`Forbidden`, { status: 403 })
    // }

    const openaiUserLocaleInfo = request.headers.get(
      'openai-subdivision-1-iso-code'
    )
    const { anime: query } = data
    console.log()
    console.log()
    console.log('>>> search', `${query} (${openaiUserLocaleInfo}, ${ip})`)
    console.log()

    const anilist = new Anilist(anilistAccessToken)
    const r = (await anilist.search('anime', query)) as types.AnimeSearchResults

    if (!r.media?.length) {
      return new Response(`Anime "${query}" not found`, { status: 404 })
    }

    const media = r.media[0]
    const anime = await anilist.media.anime(media.id)

    const animeMetadata = {
      ...utils.pick(anime, 'id', 'description', 'genres'),
      title:
        anime.title?.userPreferred ||
        anime.title?.english ||
        anime.title?.native ||
        anime.title?.romaji ||
        query,
      // coverImage: anime.coverImage?.large,
      // bannerImage: anime.bannerImage,
      tags: anime.tags?.map((tag) => tag.name),
      characters: anime.characters?.map((character) => character.name),
      reviews: anime.reviews
        ?.slice(0, 2)
        .map((review) => utils.pick(review, 'summary', 'body'))
    }

    const actions = getActions(host)

    console.log()
    console.log()
    console.log('<<< search', `${query} (${openaiUserLocaleInfo}, ${ip})`)

    return new Response(
      JSON.stringify({ anime: animeMetadata, actions }, null, 2),
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        }
      }
    )
  }
}
