import { GameState } from './game-state'
import { UserSign } from './types'
import { makeSafe } from './utils'

const result = makeSafe(main)

if (!result.ok) {
  const errorMessage = result.error instanceof Error ? result.error : new Error(`${result.error}`)

  console.error(errorMessage.message)
}

function main(): string {
  const gameState = new GameState()
  const userSign: UserSign = UserSign.O

  gameState.setField(UserSign.O, 0, 0)
  gameState.setField(UserSign.X, 1, 0)
  gameState.setField(UserSign.O, 0, 1)
  gameState.setField(UserSign.X, 1, 1)
  gameState.setField(UserSign.O, 0, 2)

  if (gameState.hasWinner(userSign, 3)) {
    return `The winner is ${userSign}`
  }

  return 'No winner yet'
}
