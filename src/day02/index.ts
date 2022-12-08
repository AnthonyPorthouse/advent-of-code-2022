import {
  calculateCorrectMove,
  calculateGameResult,
  moveScore,
  resultScore,
} from "./game.js";
import { getMoveAndResultFromFile, getMovesFromFile } from "./parser.js";

export const exampleFile = new URL(`./example.txt`, import.meta.url).pathname;
export const inputFile = new URL(`./input.txt`, import.meta.url).pathname;

export async function runPart1(filename: string) {
  console.time(`Day 02 Part 1 ${filename}`);
  console.log(`Running Part 1 on ${filename}`);

  let score = 0;
  for await (const round of getMovesFromFile(filename)) {
    const result = calculateGameResult(round);
    const roundScore = moveScore(round[1]) + resultScore(result);

    score += roundScore;
  }

  console.timeEnd(`Day 02 Part 1 ${filename}`);

  return score;
}

export async function runPart2(filename: string) {
  console.time(`Day 02 Part 2 ${filename}`);
  console.log(`Running Part 2 on ${filename}`);

  let score = 0;
  for await (const round of getMoveAndResultFromFile(filename)) {
    const [move1, result] = round;

    const targetMove = calculateCorrectMove(move1, result);
    const roundScore = moveScore(targetMove) + resultScore(result);

    score += roundScore;
  }

  console.timeEnd(`Day 02 Part 2 ${filename}`);

  return score;
}

export async function run() {
  console.log(`Total Score: ${await runPart1(inputFile)}`);
  console.log(`Total Score: ${await runPart2(inputFile)}`);
}
