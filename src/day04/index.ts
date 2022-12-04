import { parseRangePairsFromFile } from "./parser.js";

export const exampleFile = new URL("./example.txt", import.meta.url).pathname;
export const inputFile = new URL("./input.txt", import.meta.url).pathname;

export async function runPart1(filename: string) {
  console.time(`Day 04 Part 1 ${filename}`);

  let total = 0;
  for await (const [first, second] of parseRangePairsFromFile(filename)) {
    if (first.containsRange(second) || second.containsRange(first)) {
      total += 1;
    }
  }
  console.timeEnd(`Day 04 Part 1 ${filename}`);

  return total;
}

export async function runPart2(filename: string) {
  console.time(`Day 04 Part 2 ${filename}`);

  let total = 0;
  for await (const [first, second] of parseRangePairsFromFile(filename)) {
    if (first.overlapsRange(second) || second.overlapsRange(first)) {
      total += 1;
    }
  }
  console.timeEnd(`Day 04 Part 2 ${filename}`);

  return total;
}

console.log(await runPart1(inputFile));
console.log(await runPart2(inputFile));
