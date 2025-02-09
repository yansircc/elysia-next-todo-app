import { Elysia } from 'elysia'
import * as controllers from './controllers'

export const elysiaApp = new Elysia({ prefix: '/api' })
  .use(controllers.todoController)
  .onError(({ code, error }) => {
    console.log(code)
    return new Response(JSON.stringify({ error }), {
      status: 500,
    })
  })

export type TElysiaApp = typeof elysiaApp
