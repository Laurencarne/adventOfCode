import { parseLines } from '../utils'

const data = parseLines('advent/04-CampCleanUp/data.txt', true).map((x) =>
  x
    .split(',')
    .map((y) => y.split(','))
    .flatMap((x) => x.flatMap((c) => c.split('-'))),
)

export function DayFour() {
  const length = data.filter((set) => {
    const item1 = +set[0]
    const item2 = +set[1]
    const item3 = +set[2]
    const item4 = +set[3]

    const roomOneCoversRoomTwo = item1 <= item3 && item2 >= item4
    const roomTwoCoversRoomOne = item3 <= item1 && item4 >= item2

    const firstIsCovered = item1 <= item3 && item2 >= item3
    const secondIsCovered = item2 >= item4 && item1 <= item4

    // return roomOneCoversRoomTwo || roomTwoCoversRoomOne // part one
    return firstIsCovered || secondIsCovered || roomOneCoversRoomTwo || roomTwoCoversRoomOne // part two
  }).length

  // console.log('Your total score for part one is: ', length)
  console.log('Your total score for part two is: ', length)
}
