import { readFileSync } from 'fs'

const file = readFileSync('advent/01-CalorieCounting/data.ts', 'utf8')

export function DayOne() {
  const sortedTotals = file
    .split('\n\n')
    .map((elf) => elf.split('\n').reduce((a, b) => +a + +b, 0))
    .sort((a, b) => b - a)

  console.log('The answer to part one is: ', sortedTotals[0])

  console.log('The answer to part two is: ', sortedTotals[0] + sortedTotals[1] + sortedTotals[2])
}
