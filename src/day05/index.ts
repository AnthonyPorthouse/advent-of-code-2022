import { getInitialState, getMoves } from "./parser.js";

export const exampleFile = new URL("./example.txt", import.meta.url).pathname;
export const inputFile = new URL("./input.txt", import.meta.url).pathname;

export async function runPart1(filename: string) {
  console.time(`Day 05 Part 1 ${filename}`);

  const state = await getInitialState(filename);
  const moves = await getMoves(filename);

  for (const move of moves) {
    console.log(
      `To Move ${move.count} from ${move.from - 1} to ${move.to - 1}`
    );

    for (let i = 0; i < move.count; i++) {
      const val = state[move.from - 1].pop() as string;

      state[move.to - 1].push(val);
    }
  }

  console.timeEnd(`Day 05 Part 1 ${filename}`);

  return state.reduce((val, col) => (val += col.pop()), "");
}

export async function runPart2(filename: string) {
  console.time(`Day 05 Part 2 ${filename}`);

  const state = await getInitialState(filename);
  const moves = await getMoves(filename);

  console.log(state);

  for (const move of moves) {
    console.log(
      `To Move ${move.count} from ${move.from - 1} to ${move.to - 1}`
    );

    const chunk = state[move.from - 1].splice(-move.count)

    state[move.to - 1].push(...chunk)
  }

  console.timeEnd(`Day 05 Part 2 ${filename}`);

  return state.reduce((val, col) => (val += col.pop()), "");
}

console.log(`Message: ${await runPart1(inputFile)}`);
console.log(`Message: ${await runPart2(inputFile)}`);
