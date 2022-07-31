// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import {server} from './msw.js'

beforeAll(() => {
  window.crypto = {}
  window.crypto.subtle = {}
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
