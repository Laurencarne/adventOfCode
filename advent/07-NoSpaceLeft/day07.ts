import { parseLines } from '../utils'

const lines = parseLines('advent/07-NoSpaceLeft/data.txt', true).join(';').split('$ ')

export function DaySeven() {
  console.log(lines)
}
