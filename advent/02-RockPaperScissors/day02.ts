import { parseLines } from '../utils'

const lines = parseLines('advent/02-RockPaperScissors/data.txt', true).map((x) => x.split(' '))

function myScorePartOne(oponentsMove: string, myMove: string): number {
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

function myScorePartTwo(oponentsMove: string, gameResult: string): number {
  let myScore = 0
  if (gameResult === 'X') {
    if (oponentsMove === 'A') {
      myScore = 3
    } else if (oponentsMove === 'B') {
      myScore = 1
    } else {
      myScore = 2
    }
  } else if (gameResult === 'Y') {
    if (oponentsMove === 'A') {
      myScore = 4
    } else if (oponentsMove === 'B') {
      myScore = 5
    } else {
      myScore = 6
    }
  } else {
    if (oponentsMove === 'A') {
      myScore = 8
    } else if (oponentsMove === 'B') {
      myScore = 9
    } else {
      myScore = 7
    }
  }
  return myScore
}

export function DayTwo() {
  let totalScorePartOne = 0
  let totalScorePartTwo = 0
  let gamesPlayed = 0

  lines.forEach((game) => {
    totalScorePartOne = totalScorePartOne + myScorePartOne(game[0], game[1])
    totalScorePartTwo = totalScorePartTwo + myScorePartTwo(game[0], game[1])
    gamesPlayed++
  })

  console.log('Your total score for part one is: ', totalScorePartOne, '. Games Played: ', gamesPlayed)
  console.log('Your total score for part two is: ', totalScorePartTwo, '. Games Played: ', gamesPlayed)
}
