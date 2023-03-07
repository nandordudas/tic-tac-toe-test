import { GameState } from './game-state'
import { UserSign } from './types'
import { makeSafe } from './utils'

const getResult = makeSafe((): string => {
  const gameState = new GameState()
  const userSign: UserSign = UserSign.O

  gameState.setField(UserSign.O, 0, 0)
  gameState.setField(UserSign.X, 1, 0)
  gameState.setField(UserSign.O, 0, 1)
  gameState.setField(UserSign.X, 1, 1)
  gameState.setField(UserSign.O, 0, 2)

  if (gameState.hasWinner(userSign, 3))
    return `The winner is ${userSign}`

  return 'No winner yet'
})

main()

function main(): void {
  const result = getResult()

  if (!result.ok) {
    const errorMessage = result.error instanceof Error
      ? result.error
      : new Error(`${result.error}`)

    return console.error(errorMessage.message)
  }

  // eslint-disable-next-line no-console
  console.log(result.value)
}
