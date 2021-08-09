import { getPayload } from './handlerPayload'

export const body = (window) => {
  throw getPayload(window)
  return 'I must return a string'
}
