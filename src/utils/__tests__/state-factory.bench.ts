import { bench } from 'vitest'

import type { Field } from '../../types'
import { transposeArray } from '../transpose-array'

const state = [
  ['00', '01', '02'],
  ['10', '11', '12'],
  ['20', '21', '22'],
] as unknown as Field[][]

describe('stateFactory', () => {
  // Has better performance, ~1.5x faster than 'get diagonals with double transpose'
  bench('get diagonals with reversed mapping', () => {
    state
      .map((row, index) => row.at(row.length - 1 - index)! || null)
      .map((row, index) => row.at(index)!)
  })

  bench('get diagonals with double transpose', () => {
    transposeArray(transposeArray(state))
      .map((row, index) => row.at(index)!)
  })
})
