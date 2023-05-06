import { OpenAPIRoute, Query, Str } from '@cloudflare/itty-router-openapi'
import { isValidChatGPTIPAddress } from 'chatgpt-plugin'

import * as types from './types'

export class BookSearch extends OpenAPIRoute {
  static schema = {
    summary:
      'Searches the book The Lessons of History and returns the most relevant passages.',

    parameters: {
      query: Query(
        new Str({
          description: 'Search query',
          example: 'men and women'
        }),
        {
          required: true
        }
      )
    },
    responses: {
      '200': {
        schema: {
          results: [
            {
              content: new Str({
                description: 'The text content of the passage'
              })
            }
          ]
        }
      }
    }
  }

  async handle(request: Request, env: any, _ctx, data: Record<string, any>) {
    const searchApiBaseUrl = env.SEARCH_API_BASE_URL
    if (!searchApiBaseUrl) {
      return new Response('SEARCH_API_BASE_URL not set', { status: 500 })
    }

    const ip = request.headers.get('Cf-Connecting-Ip')
    if (!ip) {
      console.warn('search error missing IP address')
      return new Response('invalid source IP', { status: 500 })
    }

    if (env.ENVIRONMENT === 'production' && !isValidChatGPTIPAddress(ip)) {
      // console.warn('search error invalid IP address', ip)
      return new Response(`Forbidden`, { status: 403 })
    }

    const openaiUserLocaleInfo = request.headers.get(
      'openai-subdivision-1-iso-code'
    )
    const { query } = data
    console.log()
    console.log()
    console.log('>>> search', `${query} (${openaiUserLocaleInfo}, ${ip})`)
    console.log()

    const url = new URL(`${searchApiBaseUrl}/query`)
    url.search = new URLSearchParams({
      query
    }).toString()

    const results: types.SearchResponseBody = await fetch(url).then((res) => {
      if (!res.ok) {
        throw new Error(`Search API error: ${res.statusText}`)
      }

      return res.json()
    })

    console.log(`search results for query "${query}"`, results)
    console.log()
    console.log()
    console.log('<<< search', `${query} (${openaiUserLocaleInfo}, ${ip})`)

    const responseBody = {
      results: results.map((r) => ({
        content: r.page_content
      }))
    }

    return new Response(JSON.stringify(responseBody, null, 2), {
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    })
  }
}
