import fs from 'fs'

export const parseLines = (fileName: fs.PathOrFileDescriptor, trim: boolean) => {
  const contents = fs.readFileSync(fileName).toString().split('\n')
  contents.pop()
  if (trim) return contents.map((x) => x.trim())
  return contents
}

export const parseInput = (fileName: fs.PathOrFileDescriptor) => fs.readFileSync(fileName).toString()
