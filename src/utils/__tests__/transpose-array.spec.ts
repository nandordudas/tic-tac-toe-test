import type { Field } from '../../types'
import { transposeArray } from '..'

describe('transposeArray', () => {
  it('should transpose 3x3 array', () => {
    const original = [
      ['00', '01', '02'],
      ['10', '11', '12'],
      ['20', '21', '22'],
    ] as unknown as Field[][]

    const expected = [
      ['00', '10', '20'],
      ['01', '11', '21'],
      ['02', '12', '22'],
    ] as unknown as Field[][]

    expect(transposeArray(original)).toStrictEqual<Field[][]>(expected)
  })

  it('should transpose 5x3 array', () => {
    const original = [
      ['00', '01', '02', '03', '04'],
      ['10', '11', '12', '13', '14'],
      ['20', '21', '22', '23', '24'],
    ] as unknown as Field[][]

    const expected = [
      ['00', '10', '20'],
      ['01', '11', '21'],
      ['02', '12', '22'],
      ['03', '13', '23'],
      ['04', '14', '24'],
    ] as unknown as Field[][]

    expect(transposeArray(original)).toStrictEqual<Field[][]>(expected)
  })
})
