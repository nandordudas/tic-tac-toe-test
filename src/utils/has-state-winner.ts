import type { Field, UserSign } from '../types'
import { hasRowWinner } from './has-row-winner'

interface HasStateWinnerParams<T extends Field> {
  state: T[][]
  userSign: UserSign
  length: number
}

export const hasStateWinner = <T extends Field>(params: HasStateWinnerParams<T>): boolean => {
  const { state, length, userSign } = params

  return state.some(fields => hasRowWinner({ fields, length, userSign }))
}
