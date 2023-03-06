import { GameState } from './game-state'
import { UserSign } from './types'

try {
  main()
}
catch (error) {
  const errorMessage = error instanceof Error
    ? error
    : new Error('Something went wrong', { cause: error })

  console.error(errorMessage.message)
}

function main() {
  const gameState = new GameState()
  const userSign: UserSign = UserSign.O

  gameState.setField(UserSign.O, 0, 0)
  gameState.setField(UserSign.X, 1, 0)
  gameState.setField(UserSign.O, 0, 1)
  gameState.setField(UserSign.X, 1, 1)
  gameState.setField(UserSign.O, 0, 2)

  if (gameState.hasWinner(userSign, 3)) {
    // eslint-disable-next-line no-console
    return console.log(`The winner is ${userSign}`)
  }

  // eslint-disable-next-line no-console
  console.log('No winner yet')
}
