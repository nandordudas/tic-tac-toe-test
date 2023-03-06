import type { Field } from '../types'

export const stateFactory = <T extends Field>(state: T[][]): T[][] => {
  const result = [...state]
  const mainDiagonalItems = result.map((row, index) => row.at(index)!)
  const secondaryDiagonalItems = result.map((row, index) => {
    return row.at(row.length - 1 - index)! || null
  })

  return [
    ...state,
    mainDiagonalItems,
    secondaryDiagonalItems,
  ]
}
