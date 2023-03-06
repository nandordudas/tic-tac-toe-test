import type { Field, UserSign } from '../types'
import { isRowPotential } from './is-row-potential'

interface HasRowWinnerParams<T extends Field> {
  fields: T[]
  userSign: UserSign
  length: number
}

export const hasRowWinner = <T extends Field>(params: HasRowWinnerParams<T>): boolean => {
  const { fields, length, userSign } = params

  if (!isRowPotential({ fields, length }))
    return false

  return fields.join('') === userSign.repeat(length)
}
