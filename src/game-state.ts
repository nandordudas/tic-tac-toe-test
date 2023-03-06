import { type Field, UserSign } from './types'
import { hasStateWinner } from './utils'

export class GameState {
  #currentUser: UserSign = UserSign.O

  #state: Field[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  get state() {
    return this.#state
  }

  hasWinner(userSign: UserSign, length: number) {
    return hasStateWinner({ length, state: this.#state, userSign })
  }

  getField(column: number, row: number): Field | undefined {
    return this.#state.at(column)?.at(row)
  }

  setField(value: UserSign, column: number, row: number): void {
    if (this.getField(column, row))
      throw new Error('Field is not empty')

    if (this.#currentUser !== value)
      throw new Error('This is not your turn')

    // @ts-expect-error value can be undefined
    this.#state[column][row] = value

    this.#toggleCurrentUser()
  }

  #toggleCurrentUser() {
    this.#currentUser = this.#currentUser === UserSign.O ? UserSign.X : UserSign.O
  }
}
