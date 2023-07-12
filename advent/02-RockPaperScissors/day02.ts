import { parseLines } from '../utils'

const lines = parseLines('advent/02-RockPaperScissors/data.txt', true).map((x) => x.split(' '))

function myScore(oponentsMove: string, myMove: string): number {
  let myScore = 0
  const myMoveScore = myMove === 'X' ? 1 : myMove === 'Y' ? 2 : 3

  if (oponentsMove === 'A') {
    if (myMove === 'X') {
      myScore = 3
    } else if (myMove === 'Y') {
      myScore = 6
    } else {
      myScore = 0
    }
  } else if (oponentsMove === 'B') {
    if (myMove === 'X') {
      myScore = 0
    } else if (myMove === 'Y') {
      myScore = 3
    } else {
      myScore = 6
    }
  } else if (oponentsMove === 'C') {
    if (myMove === 'X') {
      myScore = 6
    } else if (myMove === 'Y') {
      myScore = 0
    } else {
      myScore = 3
    }
  }
  return myScore + myMoveScore
}

export function DayTwo() {
  let totalScore = 0
  let gamesPlayed = 0

  lines.forEach((game) => {
    totalScore = totalScore + myScore(game[0], game[1])
    gamesPlayed++
  })

  console.log('Your total score is: ', totalScore, '. Games Played: ', gamesPlayed)
}
