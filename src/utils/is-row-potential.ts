import type { Field } from '../types'
import { hasRowValue } from './has-row-value'

interface IsRowPotentialParams<T extends Field> {
  fields: T[]
  length: number
}

export const isRowPotential = <T extends Field>(params: IsRowPotentialParams<T>): boolean => {
  const { fields, length } = params

  if (!hasRowValue(fields))
    return false

  return fields.filter(Boolean).length === length
}
