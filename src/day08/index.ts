import { findVisibleFromOutside } from "./grid.js";
import { getLinesFromFile } from "../utils/loadFile.js";
import { inputToNumericGrid } from "../utils/grid.js";

export const exampleFile = new URL('./example.txt', import.meta.url).pathname
export const inputFile = new URL('./input.txt', import.meta.url).pathname

export async function runPart1(filename: string) {
  console.time(`Day 8 Part 1 ${filename}`)

  const input: string[] = []

  for await (const line of getLinesFromFile(filename)) {
    if (line === '') continue
    input.push(line)
  }

  const total = findVisibleFromOutside(inputToNumericGrid(input))

  console.timeEnd(`Day 8 Part 1 ${filename}`)

  return total
}

console.log(`Visible trees: ${await runPart1(inputFile)}`)
