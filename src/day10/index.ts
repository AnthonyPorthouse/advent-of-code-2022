import { runInstructions } from "./parser.js";

export const exampleFile = new URL("./example.txt", import.meta.url).pathname;
export const inputFile = new URL("./input.txt", import.meta.url).pathname;

export async function runPart1(filename: string) {
  console.time("Day 10 Part 1");

  const interval = 40;
  let index = 0;

  let total = 0;
  for await (const value of runInstructions(filename)) {
    index += 1;

    const reportingIndex = (index - 20) % interval;
    if (reportingIndex === 0) {
      total += index * value;
    }
  }

  console.timeEnd("Day 10 Part 1");

  return total;
}

export async function run() {
  console.log(`Signal Strength: ${await runPart1(inputFile)}`);
}
