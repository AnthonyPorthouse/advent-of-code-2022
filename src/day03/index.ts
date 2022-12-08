import type { Backpack } from "./backpacks.js";
import {
  getBackpacksFromFile,
  getFullBackpacksFromFile,
  getItemInAllBackpacks,
  getItemInBothBackpacks,
} from "./backpacks.js";
import { getItemScore } from "./item.js";

export const exampleFile = new URL("./example.txt", import.meta.url).pathname;
export const inputFile = new URL("./input.txt", import.meta.url).pathname;

export async function runPart1(filename: string) {
  console.time(`Day 03 Part 1 ${filename}`);

  let total = 0;

  for await (const [a, b] of getBackpacksFromFile(filename)) {
    const item = getItemInBothBackpacks(a, b);
    total += getItemScore(item);
  }

  console.timeEnd(`Day 03 Part 1 ${filename}`);
  return total;
}

export async function runPart2(filename: string) {
  console.time(`Day 03 Part 2 ${filename}`);
  console.log(`Running Part 2 on ${filename}`);
  let total = 0;

  let group: Backpack[] = [];

  for await (const backpack of getFullBackpacksFromFile(filename)) {
    if (group.length !== 3) {
      group.push(backpack);
    }

    if (group.length !== 3) {
      continue;
    }

    const item = getItemInAllBackpacks(group[0], group[1], group[2]);
    total += getItemScore(item);
    group = [];
  }

  console.timeEnd(`Day 03 Part 2 ${filename}`);

  return total;
}

export async function run() {
  console.log(`Total Value: ${await runPart1(inputFile)}`);
  console.log(`Total Value: ${await runPart2(inputFile)}`);
}
