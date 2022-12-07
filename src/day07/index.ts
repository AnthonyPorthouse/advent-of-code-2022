import { getTreeFromFile } from "./parser.js";

export const exampleFile = new URL('./example.txt', import.meta.url).pathname
export const inputFile = new URL('./input.txt', import.meta.url).pathname

export async function runPart1(filename: string) {
  console.time(`Day 7 Part 1 ${filename}`)

  const tree = await getTreeFromFile(filename)

  const total = tree.getDirectoriesWithMaxSize(100000).reduce((carry, node) => carry + node.getTotalSize(), 0)

  console.timeEnd(`Day 7 Part 1 ${filename}`)

  return total
}

export async function runPart2(filename: string, maxSize: number, need: number) {
  console.time(`Day 7 Part 2 ${filename}`)

  const tree = await getTreeFromFile(filename)

  const toSave = tree.getTotalSize() - (maxSize - need)

  const total = tree.getSmallestDirectoryWithMinSize(toSave, tree).getTotalSize()

  console.timeEnd(`Day 7 Part 2 ${filename}`)

  return total
}

console.log(`Total Size: ${await runPart1(inputFile)}`)
console.log(`Total Size: ${await runPart2(inputFile, 70000000, 30000000)}`)
