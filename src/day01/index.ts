import { getLinesFromFile } from "../utils/loadFile.js";

export const exampleFile = new URL(`./example.txt`, import.meta.url).pathname;
export const inputFile = new URL(`./input.txt`, import.meta.url).pathname;

async function runPart1(filename: string) {
  console.time(`day 01 part 1 ${filename}`);

  const elves: number[] = [];

  let total = 0;
  let currentElf = 0;
  let largestElfTotal = 0;
  for await (const line of getLinesFromFile(filename)) {
    if (line === "") {
      if (total > elves[largestElfTotal]) {
        largestElfTotal = currentElf;
      }

      elves.push(total);
      total = 0;
      currentElf += 1;
      continue;
    }

    total += Number(line);
  }

  console.timeEnd(`day 01 part 1 ${filename}`);

  return elves[largestElfTotal]
}

async function runPart2(filename: string) {
  console.time(`day 01 part 2 ${filename}`);

  const elves: number[] = [];

  let total = 0;

  for await (const line of getLinesFromFile(filename)) {
    if (line === "") {
      elves.push(total);
      total = 0;
      continue;
    }

    total += Number(line);
  }

  elves.sort((a, b) => {
    if (a === b) {
      return 0;
    }
    return a < b ? 1 : -1;
  });
  console.timeEnd(`day 01 part 2 ${filename}`);

  return elves.slice(0, 3).reduce((p, v) => p + v, 0)
}

export async function run() {
  console.log(`Largest Value - ${await runPart1(inputFile)}`);

  console.log(`Combined top 3: ${await runPart2(inputFile)}`)
}
