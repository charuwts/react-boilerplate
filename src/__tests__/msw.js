import 'whatwg-fetch'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
  // rest.patch('/example', async (req, resp, ctx) => {
  //   const json = await req.json()
  //   return resp(
  //     ctx.status(200),
  //     ctx.json({
  //       data: {...json['object'], uuid: '1234'},
  //     }),
  //   )
  // }),
  // rest.post('/example', async (req, resp, ctx) => {
  //   const json = await req.json()

  //   return resp(
  //     ctx.status(200),
  //     ctx.json({
  //       data: {...json['object'], uuid: '1234'},
  //     }),
  //   )
  // }),
  rest.get('/example', async (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json('clicked'))
  }),
  rest.get('*', (req, res, ctx) => {
    console.error('Please add request handler for ${req.url.toString()}')
    return res(
      ctx.status(500),
      ctx.json({error: 'Please add request handler for ${req.url.toString()}'}),
    )
  }),
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

export {server, rest}
