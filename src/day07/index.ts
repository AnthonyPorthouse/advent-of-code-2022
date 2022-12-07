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

console.log(`Total Size: ${await runPart1(inputFile)}`)
