import { OpenAPIRouter } from '@cloudflare/itty-router-openapi'
import { defineAIPluginManifest } from 'chatgpt-plugin'

import * as routes from './routes'
import pkg from '../package.json'
import { getActions } from './actions'
import { getSession } from './sessions'

export interface Env {
  ANILIST_ACCESS_TOKEN: string
  REDIS: string
  ENVIRONMENT: string
}

const router = OpenAPIRouter({
  schema: {
    info: {
      title: pkg.aiPlugin.name,
      version: pkg.version
    }
  }
})

router.get('/start', routes.StartGame)
router.get('/continue', routes.ContinueGame)

router.get('/.well-known/ai-plugin.json', (request: Request) => {
  const host = request.headers.get('host')
  const pluginManifest = defineAIPluginManifest(
    {
      description_for_human: pkg.description,
      name_for_human: pkg.aiPlugin.name,
      ...pkg.aiPlugin
    },
    { openAPIUrl: `https://${host}/openapi.json` }
  )

  return new Response(JSON.stringify(pluginManifest, null, 2), {
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  })
})

router.get(
  '/:gameId/actions/:id',
  async (request: Request, env: any, _ctx, data: Record<string, any>) => {
    const host = request.headers.get('host')
    const id = request.url.split('/').pop()
    const gameId = request.url.split('/')[3]
    console.log(gameId)

    // const id = data.id
    const actions = getActions(host, gameId)
    const action = actions.find((a) => a.id === id)
    if (!action) {
      return new Response(`Action not found`, { status: 404 })
    }

    console.log({ id, gameId })
    const session = await getSession(gameId)
    session.action = id

    const desc = action.description
    const title = action.name
    const imageUrl = action.imageUrl

    const html = `
  <html>
  <head>
      <meta name='description' content="${desc}">
      <meta property='og:description' content="${desc}">
      <meta name='twitter:description' content="${desc}" />

      <meta name='twitter:card' content='summary_large_image' >
      <meta name='twitter:image' content="${imageUrl}" >
      <meta property='og:image' content="${imageUrl}" >

      <meta property='og:title' content="${title}" >
      <meta name='twitter:title' content="${title}" >
      <title>${title}</title>

      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        img {
          width: 100%;
          max-width: 800px;
        }
      </style>
  </head>

  <body>
    <h1>${title}</h1>

    <p>${desc}</p>

    <img src="${imageUrl}" />
  </body>

  </html>
  `
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8'
      }
    })
  }
)

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

export default {
  fetch: (request: Request, env: Env, ctx: ExecutionContext) =>
    router.handle(request, env, ctx)
}
