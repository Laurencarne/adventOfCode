import { parseLines } from '../utils'

const lines = parseLines('advent/06-TuningTrouble/data.txt', true)[0]

function hasRepeats(str: string) {
  return /(.).*\1/.test(str)
}

function PartOne() {
  let answerPartOne = null
  for (let i = 0; i < lines.length; i++) {
    if (!hasRepeats(lines.slice(i, i + 4))) {
      answerPartOne = i + 4
      return console.log('Your total score for part one is: ', answerPartOne)
    }
  }
}

function PartTwo() {
  let answerPartTwo = null
  for (let i = 0; i < lines.length; i++) {
    if (!hasRepeats(lines.slice(i, i + 14))) {
      answerPartTwo = i + 14
      return console.log('Your total score for part two is: ', answerPartTwo)
    }
  }
}

export function DaySix() {
  PartOne()
  PartTwo()
}
