import {
  calculateCorrectMove,
  calculateGameResult,
  moveScore,
  resultScore,
} from "./game.js";
import { getMoveAndResultFromFile, getMovesFromFile } from "./parser.js";

async function runPart1(filename: string) {
  console.time(`Day 02 Part 1 ${filename}`);
  console.log(`Running Part 1 on ${filename}`);
  const file = new URL(`./${filename}`, import.meta.url).pathname;

  let score = 0;
  for await (const round of getMovesFromFile(file)) {
    const result = calculateGameResult(round);
    const roundScore = moveScore(round[1]) + resultScore(result);

    score += roundScore;
  }

  console.log(`Total Score: ${score}`);
  console.timeEnd(`Day 02 Part 1 ${filename}`);
}

async function runPart2(filename: string) {
  console.time(`Day 02 Part 2 ${filename}`);
  console.log(`Running Part 2 on ${filename}`);
  const file = new URL(`./${filename}`, import.meta.url).pathname;

  let score = 0;
  for await (const round of getMoveAndResultFromFile(file)) {
    const [move1, result] = round;

    const targetMove = calculateCorrectMove(move1, result);
    const roundScore = moveScore(targetMove) + resultScore(result);

    score += roundScore;
  }

  console.log(`Total Score: ${score}`);
  console.timeEnd(`Day 02 Part 2 ${filename}`);
}

console.time("Day 02");
await runPart1("example.txt");
await runPart1("input.txt");

await runPart2("example.txt");
await runPart2("input.txt");
console.timeEnd("Day 02");
