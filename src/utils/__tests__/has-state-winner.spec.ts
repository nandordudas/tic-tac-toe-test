import { type Field, UserSign } from '../../types'
import { hasStateWinner } from '..'

describe('hasStateWinner', () => {
  it('should check fields has winner', () => {
    const state: Field[][] = [
      [UserSign.O, null, null],
      [UserSign.O, UserSign.O, null],
      [UserSign.O, UserSign.O, UserSign.O],
    ] as unknown as Field[][]

    expect(hasStateWinner({ state, userSign: UserSign.O, length: 3 })).toBe(true)
    expect(hasStateWinner({ state, userSign: UserSign.O, length: 4 })).toBe(false)
    expect(hasStateWinner({ state, userSign: UserSign.X, length: 3 })).toBe(false)
  })
})
