import { OpenAPIRoute, Query, Str } from '@cloudflare/itty-router-openapi'
import Anilist from 'anilist-node'
import { nanoid } from 'nanoid'

// import { isValidChatGPTIPAddress } from 'chatgpt-plugin'
import * as types from './types'
import * as utils from './utils'
import { getActions } from './actions'
import { addSession, getSession } from './sessions'

export class StartGame extends OpenAPIRoute {
  static schema = {
    summary:
      'Starts a new game. The user provides an anime to focus on. You should use the anime metadata to create a story. It also returns "actions" . Your story should focus on the "actions" to continue the story. Make sure to use the "gameId" in future "continue" actions.',
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
          gameId: new Str({
            description: 'Unique ID of the current game session'
          }),
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

    const gameId = nanoid().replaceAll('-', '')
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

    const actions = getActions(host, gameId)

    await addSession(gameId, {
      anime: animeMetadata,
      actions
    })

    console.log()
    console.log()
    console.log('<<< search', `${query} (${openaiUserLocaleInfo}, ${ip})`)

    return new Response(
      JSON.stringify({ gameId, anime: animeMetadata, actions }, null, 2),
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        }
      }
    )
  }
}

export class ContinueGame extends OpenAPIRoute {
  static schema = {
    summary:
      'Continues a game given a "gameId". Use "actions" to continue the story. Focus on giving the user the option to choose between the given actions. The user will click on an "actionUrl" to continue.  Make sure to use the "gameId" returned in "continue".',
    parameters: {
      gameId: Query(
        new Str({
          description: 'ID of the game session to continue',
          example: '109091283k3j'
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

    // TODO: protect against abuse in prod
    // if (env.ENVIRONMENT === 'production' && !isValidChatGPTIPAddress(ip)) {
    //   // console.warn('search error invalid IP address', ip)
    //   return new Response(`Forbidden`, { status: 403 })
    // }

    const openaiUserLocaleInfo = request.headers.get(
      'openai-subdivision-1-iso-code'
    )
    const { anime: query } = data
    const ip = 'foo'
    console.log()
    console.log()
    console.log('>>> search', `${query} (${openaiUserLocaleInfo}, ${ip})`)
    console.log()

    const gameId = data.gameId
    const session = await getSession(gameId)

    const actions = getActions(host, gameId)

    console.log()
    console.log()
    console.log('<<< search', `${query} (${openaiUserLocaleInfo}, ${ip})`)

    return new Response(
      JSON.stringify({ gameId, anime: session.anime, actions }, null, 2),
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        }
      }
    )
  }
}
