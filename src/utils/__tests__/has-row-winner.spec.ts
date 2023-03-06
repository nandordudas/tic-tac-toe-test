import { type Field, UserSign } from '../../types'
import { hasRowWinner } from '..'

describe('hasRowWinner', () => {
  it('should check row has winner', () => {
    const fields: Field[][] = [
      [UserSign.O, null, null],
      [UserSign.O, UserSign.O, null],
      [UserSign.O, UserSign.O, UserSign.O],
    ] as unknown as Field[][]

    expect(hasRowWinner({ fields: fields.at(0)!, length: 3, userSign: UserSign.O })).toBe(false)
    expect(hasRowWinner({ fields: fields.at(1)!, length: 3, userSign: UserSign.O })).toBe(false)
    expect(hasRowWinner({ fields: fields.at(2)!, length: 3, userSign: UserSign.O })).toBe(true)
    expect(hasRowWinner({ fields: fields.at(2)!, length: 4, userSign: UserSign.O })).toBe(false)
    expect(hasRowWinner({ fields: fields.at(2)!, length: 3, userSign: UserSign.X })).toBe(false)
  })
})
