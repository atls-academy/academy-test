import { getMessage } from './message'

export const getPayload = window => new Error(getMessage(window))
