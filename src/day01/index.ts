import { getLinesFromFile } from "../utils/loadFile.js";

async function runPart1(filename: string) {
  console.log(`Running on ${filename}`);

  const file = new URL(`./${filename}`, import.meta.url).pathname;

  const elves: number[] = [];

  let total = 0;
  let currentElf = 0;
  let largestElfTotal = 0;
  for await (const line of getLinesFromFile(file)) {
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

  console.log(
    `Largest Value - Elf ${largestElfTotal + 1}: ${elves[largestElfTotal]}`
  );
}

async function runPart2(filename: string) {
  console.log(`Running on ${filename}`);

  const file = new URL(`./${filename}`, import.meta.url).pathname;

  const elves: number[] = [];

  let total = 0;

  for await (const line of getLinesFromFile(file)) {
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

  console.log(
    `Combined top 3: ${elves.slice(0, 3).reduce((p, v) => p + v, 0)}`
  );
}

await runPart1("example.txt");
await runPart1("input.txt");

await runPart2("example.txt");
await runPart2("input.txt");
