import { doMovesForN, getMoves } from "./parser.js";

export const exampleFile = new URL("./example.txt", import.meta.url).pathname;
export const example2File = new URL("./example2.txt", import.meta.url).pathname;
export const inputFile = new URL("./input.txt", import.meta.url).pathname;

export async function runPart1(filename: string) {
  console.time(`Day 9 Part 1 ${filename}`);

  const moves = await getMoves(filename);

  const positions = doMovesForN(moves, 2);

  console.timeEnd(`Day 9 Part 1 ${filename}`);

  return Object.keys(positions).length;
}

export async function runPart2(filename: string) {
  console.time(`Day 9 Part 2 ${filename}`);

  const moves = await getMoves(filename);

  const positions = doMovesForN(moves, 10);

  console.timeEnd(`Day 9 Part 2 ${filename}`);

  return Object.keys(positions).length;
}

export async function run() {
  console.log(`Tail Visited: ${await runPart1(inputFile)}`);
  console.log(`Tail Visited: ${await runPart2(inputFile)}`);
}
