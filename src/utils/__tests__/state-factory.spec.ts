import { type Field, UserSign } from '../../types'
import { stateFactory } from '..'

describe('stateFactory', () => {
  it('should create state with possible rows', () => {
    const state: Field[][] = [
      [UserSign.O, null, null],
      [null, UserSign.O, null],
      [null, null, UserSign.O],
    ] as unknown as Field[][]

    const expected: Field[][] = [
      [UserSign.O, null, null],
      [null, UserSign.O, null],
      [null, null, UserSign.O],
      [UserSign.O, UserSign.O, UserSign.O],
      [null, UserSign.O, null],
    ] as unknown as Field[][]

    expect(stateFactory(state)).toHaveLength(5)
    expect(stateFactory(state)).toStrictEqual<Field[][]>(expected)
  })
})
