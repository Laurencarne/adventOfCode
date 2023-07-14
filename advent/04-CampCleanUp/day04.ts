import { parseLines } from '../utils'

const data = parseLines('advent/04-CampCleanUp/data.txt', true).map((x) =>
  x
    .split(',')
    .map((y) => y.split(','))
    .flatMap((x) => x.flatMap((c) => c.split('-'))),
)

export function DayFour() {
  const length = data.filter((set) => {
    const roomOneStart = +set[0]
    const roomOneEnd = +set[1]
    const roomTwoStart = +set[2]
    const roomTwoEnd = +set[3]

    const roomOneCoversRoomTwo = roomOneStart <= roomTwoStart && roomOneEnd >= roomTwoEnd
    const roomTwoCoversRoomOne = roomTwoStart <= roomOneStart && roomTwoEnd >= roomOneEnd

    return roomOneCoversRoomTwo || roomTwoCoversRoomOne
  }).length

  console.log('Your total score for part one is: ', length)
}
