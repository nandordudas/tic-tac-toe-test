import { type Field, UserSign } from '../../types'
import { hasRowValue } from '..'

describe('hasRowValue', () => {
  describe('fields value', () => {
    it.each([
      { state: 0, expected: false },
      { state: '', expected: false },
      { state: {}, expected: false },
      { state: null, expected: false },
      { state: undefined, expected: false },
      { state: UserSign.O, expected: true },
      { state: UserSign.X, expected: true },
    ])('should hasRowValue([$state]) -> $expected', ({ expected, state }) => {
      expect(hasRowValue([state] as Field[])).toBe(expected)
    })
  })

  describe('fields type', () => {
    it.each([
      { state: [], message: '[fields] must have values' },
      { state: 0, message: '[fields] must be type of array' },
      { state: '', message: '[fields] must be type of array' },
      { state: {}, message: '[fields] must be type of array' },
      { state: null, message: '[fields] must be type of array' },
      { state: undefined, message: '[fields] must be type of array' },
    ])('should hasRowValue($state) -> $message', ({ message, state }) => {
      expect(() => hasRowValue(state as Field[])).toThrowError(message)
    })
  })
})
