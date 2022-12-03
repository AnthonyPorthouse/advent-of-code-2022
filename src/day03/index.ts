import type { Backpack } from "./backpacks.js";
import {
  getBackpacksFromFile,
  getFullBackpacksFromFile,
  getItemInAllBackpacks,
  getItemInBothBackpacks,
} from "./backpacks.js";
import { getItemScore } from "./item.js";

async function runPart1(filename: string) {
  console.time(`Day 03 Part 1 ${filename}`);
  console.log(`Running Part 1 on ${filename}`);
  const file = new URL(`./${filename}`, import.meta.url).pathname;

  let total = 0;

  for await (const [a, b] of getBackpacksFromFile(file)) {
    const item = getItemInBothBackpacks(a, b);
    total += getItemScore(item);
  }

  console.log(`Total Value: ${total}`);
  console.timeEnd(`Day 03 Part 1 ${filename}`);
}

async function runPart2(filename: string) {
  console.time(`Day 03 Part 2 ${filename}`);
  console.log(`Running Part 2 on ${filename}`);
  const file = new URL(`./${filename}`, import.meta.url).pathname;

  let total = 0;

  let group: Backpack[] = [];

  for await (const backpack of getFullBackpacksFromFile(file)) {
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

  console.log(`Total Value: ${total}`);
  console.timeEnd(`Day 03 Part 2 ${filename}`);
}

console.time("Day 03");
await runPart1("example.txt");
await runPart1("input.txt");

await runPart2("example.txt");
await runPart2("input.txt");
console.timeEnd("Day 03");
