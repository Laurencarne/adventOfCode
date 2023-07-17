import { parseLines } from '../utils'

const lines = parseLines('advent/05-SupplySnacks/data.txt', true)

function PartOne() {
  const stacks = [
    ['V', 'C', 'W', 'L', 'R', 'M', 'F', 'Q'],
    ['L', 'Q', 'D'],
    ['B', 'N', 'C', 'W', 'G', 'R', 'S', 'P'],
    ['G', 'Q', 'B', 'H', 'D', 'C', 'L'],
    ['S', 'Z', 'F', 'L', 'G', 'V'],
    ['P', 'N', 'G', 'D'],
    ['W', 'C', 'F', 'V', 'P', 'Z', 'D'],
    ['S', 'M', 'D', 'P', 'C'],
    ['C', 'P', 'M', 'V', 'T', 'W', 'N', 'Z'],
  ]

  const instructionsIndex = lines.findIndex((line) => line.includes('move'))

  const instructionLines = lines
    .slice(instructionsIndex, lines.length)
    .map((l) => l.split(' ').filter((x) => !isNaN(parseFloat(x))))

  instructionLines.forEach((line) => {
    const numberToMove = +line[0]
    const fromStackNumber = +line[1]
    const toStackNumber = +line[2]

    for (let i = 0; i < numberToMove; i++) {
      const itemsToAdd = stacks[fromStackNumber - 1].shift()
      if (!itemsToAdd) return null
      stacks[toStackNumber - 1].unshift(itemsToAdd)
    }
  })
  return stacks.map((stack) => stack[0]).join('')
}

function PartTwo() {
  const stacks = [
    ['V', 'C', 'W', 'L', 'R', 'M', 'F', 'Q'],
    ['L', 'Q', 'D'],
    ['B', 'N', 'C', 'W', 'G', 'R', 'S', 'P'],
    ['G', 'Q', 'B', 'H', 'D', 'C', 'L'],
    ['S', 'Z', 'F', 'L', 'G', 'V'],
    ['P', 'N', 'G', 'D'],
    ['W', 'C', 'F', 'V', 'P', 'Z', 'D'],
    ['S', 'M', 'D', 'P', 'C'],
    ['C', 'P', 'M', 'V', 'T', 'W', 'N', 'Z'],
  ]

  const instructionsIndex = lines.findIndex((line) => line.includes('move'))

  const instructionLines = lines
    .slice(instructionsIndex, lines.length)
    .map((l) => l.split(' ').filter((x) => !isNaN(parseFloat(x))))

  instructionLines.forEach((line) => {
    const numberToMove = +line[0]
    const fromStackNumber = +line[1]
    const toStackNumber = +line[2]

    const itemsToAdd = stacks[fromStackNumber - 1].splice(0, numberToMove)
    if (!itemsToAdd) return null
    stacks[toStackNumber - 1].unshift(...itemsToAdd)
  })
  return stacks.map((stack) => stack[0]).join('')
}

export function DayFive() {
  const answerOne = PartOne()
  const answerTwo = PartTwo()

  console.log('Your total score for part one is: ', answerOne) // VWLCWGSDQ
  console.log('Your total score for part two is: ', answerTwo) // TCGLQSLPW
}
