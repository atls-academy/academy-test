import { getPayload } from './handlerPayload'

export const body = (window) => {
  try {
    throw getPayload(window)
  } catch (e) {
    return 'I must return a string'
  }
}
