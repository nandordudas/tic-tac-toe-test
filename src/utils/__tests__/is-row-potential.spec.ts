import { type Field, UserSign } from '../../types'
import { isRowPotential } from '..'

describe('isRowPotential', () => {
  it('should check row is potential', () => {
    const fields: Field[][] = [
      [UserSign.O, null, null],
      [UserSign.O, UserSign.O, null],
      [UserSign.O, UserSign.O, UserSign.O],
    ] as unknown as Field[][]

    expect(isRowPotential({ fields: fields.at(0)!, length: 3 })).toBe(false)
    expect(isRowPotential({ fields: fields.at(1)!, length: 3 })).toBe(false)
    expect(isRowPotential({ fields: fields.at(2)!, length: 3 })).toBe(true)
    expect(isRowPotential({ fields: fields.at(2)!, length: 4 })).toBe(false)
  })
})
