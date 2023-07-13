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

export function DayThree() {
  let totalScore = 0

  bags.forEach((bag) => {
    const bagOne = bag.splice(0, bag.length / 2)
    const duplicate = duplicateLetter(bagOne, bag)

    if (duplicate == null) return

    const answer = getPriorityScore(duplicate)
    totalScore = totalScore + answer
    console.log('Your total score for part one is: ', totalScore)
  })
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
