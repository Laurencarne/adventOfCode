import { parseLines } from '../utils'

const bags = parseLines('advent/03-RucksackReorganization/data.txt', true).map((x) => x.split(''))

function duplicateLetter(bagOne: string[], bag: string[]): string | undefined {
  for (let i = 0; i < bag.length; i++) {
    if (bagOne.includes(bag[i])) {
      return bag[i]!
    }
  }
}

function getPriorityScore(letter: string): number {
  const alpha = alphabet.concat(alphabet.toUpperCase()).split('')
  return alpha.indexOf(letter) + 1
}

function commonLetter(bagOne: string[], bagTwo: string[], bagThree: string[]): string | undefined {
  for (let i = 0; i < bagOne.length; i++) {
    if (bagTwo.includes(bagOne[i]) && bagThree.includes(bagOne[i])) {
      return bagOne[i]!
    }
  }
}

export function DayThree() {
  // Part One
  let totalScorePartOne = 0

  bags.forEach((bag) => {
    const bagOne = bag.splice(0, bag.length / 2)
    const duplicate = duplicateLetter(bagOne, bag)

    if (duplicate == null) return

    const answer = getPriorityScore(duplicate)
    totalScorePartOne = totalScorePartOne + answer
  })

  // Part Two
  let totalScorePartTwo = 0

  for (let i = 0; i < bags.length; i += 3) {
    const bagOne = bags[i]
    const bagTwo = bags[i + 1]
    const bagThree = bags[i + 2]

    const common = commonLetter(bagOne, bagTwo, bagThree)

    if (common == null) return

    const answer = getPriorityScore(common)
    totalScorePartTwo = totalScorePartTwo + answer
  }

  console.log('Your total score for part one is: ', totalScorePartOne)
  console.log('Your total score for part two is: ', totalScorePartTwo)
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
