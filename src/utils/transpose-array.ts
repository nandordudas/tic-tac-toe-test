import type { Field } from '../types'

export const transposeArray = <T extends Field>(fields: T[][]): T[][] => {
  const [rows] = fields

  if (!rows)
    throw new Error('[fields] must have values')

  return rows.map((_row, columnIndex) => {
    return fields.map(row => row[columnIndex]).filter(Boolean)
  })
}
