import { makeSafe } from '..'

describe('makeSafe', () => {
  it('should create safe function', () => {
    const expectedName = 'John'

    const getResult = makeSafe((name: string) => name)
    const result = getResult(expectedName)

    expect(result).toHaveProperty('ok')
    expect(result).toHaveProperty('value')
    expect(result).not.toHaveProperty('error')
    expect(result.ok).toBe(true)

    expectTypeOf(getResult).parameter(0).toMatchTypeOf<string>()

    if (result.ok) {
      expect(result.value).toBe(expectedName)
      expectTypeOf(result.value).toBeString()
    }
  })

  it('should create safe function for errors', () => {
    const expectedCode = 404

    const createError = makeSafe((code: number) => {
      throw new Error(code.toString())
    })

    const result = createError(expectedCode)

    expect(result).toHaveProperty('ok')
    expect(result).not.toHaveProperty('value')
    expect(result).toHaveProperty('error')
    expect(result.ok).toBe(false)

    expectTypeOf(createError).parameter(0).toMatchTypeOf<number>()

    if (!result.ok)
      expect(result.error).toStrictEqual(new Error(expectedCode.toString()))
  })
})
