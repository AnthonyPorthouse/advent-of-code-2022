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

export async function runPart2(filename: string) {
  console.time("Day 10 Part 2");

  let index = 0;

  let output = "";
  for await (const value of runInstructions(filename)) {
    if (index >= value - 1 && index <= value + 1) {
      output += "#";
    } else {
      output += ".";
    }

    index += 1;

    if (index === 40) {
      index = 0;
      output += "\n";
    }
  }

  console.timeEnd("Day 10 Part 2");

  return output;
}

export async function run() {
  console.log(`Signal Strength: ${await runPart1(inputFile)}`);
  console.log(`Display: \n${await runPart2(inputFile)}`);
}
