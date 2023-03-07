type Result<T> = { ok: true; value: T } | { ok: false; error: unknown }

export const makeSafe =
  <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn) =>
  (...args: TArgs): Result<TReturn> => {
    try {
      return {
        value: func(...args),
        ok: true,
      }
    } catch (error) {
      return {
        error,
        ok: false,
      }
    }
  }
