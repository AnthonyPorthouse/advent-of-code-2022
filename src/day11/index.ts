import { getMonkeysFromFile } from "./parser.js";
import { MonkeyList } from "./monkey.js";

export const exampleFile = new URL("./example.txt", import.meta.url).pathname;
export const inputFile = new URL("./input.txt", import.meta.url).pathname;

export async function runPart1(filename: string) {
  console.time("Day 11 Part 1");
  const monkeys: MonkeyList = {};

  const totals: { [index: number]: number } = {};

  for await (const monkey of getMonkeysFromFile(filename)) {
    monkeys[monkey.id] = monkey;
    totals[monkey.id] = 0;
  }

  for (let round = 0; round < 20; round++) {
    for (const monkey of Object.values(monkeys)) {
      totals[monkey.id] += monkey.doRound(monkeys);
    }
  }

  const sorted = Object.values(totals);

  sorted.sort((a, b) => {
    if (a === b) return 0;

    return a < b ? 1 : -1;
  });

  const monkeyBusiness = sorted[0] * sorted[1];
  console.timeEnd("Day 11 Part 1");

  return monkeyBusiness;
}

export async function run() {
  console.log(`Monkey Business: ${await runPart1(inputFile)}`);
}
