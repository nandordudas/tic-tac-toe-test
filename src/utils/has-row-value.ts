import { type Field, UserSign } from '../types'

export const hasRowValue = <T extends Field>(fields: T[]): boolean => {
  if (!Array.isArray(fields))
    throw new TypeError('[fields] must be type of array')

  if (!fields.length)
    throw new Error('[fields] must have values')

  return fields.some(item => item === UserSign.O || item === UserSign.X)
}
