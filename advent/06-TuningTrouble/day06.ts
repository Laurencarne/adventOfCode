import { parseLines } from '../utils'

const lines = parseLines('advent/06-TuningTrouble/data.txt', true)[0]

function hasRepeats(str: string) {
  return /(.).*\1/.test(str)
}

export function DaySix() {
  let answerPartOne = null
  for (let i = 0; i < lines.length; i++) {
    if (!hasRepeats(lines.slice(i, i + 4))) {
      answerPartOne = i + 4
      return console.log('Your total score for part one is: ', answerPartOne)
    }
  }
}
