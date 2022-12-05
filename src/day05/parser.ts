import { getLinesFromFile } from "../utils/loadFile.js";

async function* getSectionsFromFile(file: string): AsyncGenerator<string[]> {
  let chunk: string[] = [];
  for await (const line of getLinesFromFile(file)) {
    if (line === "") {
      yield chunk;
      chunk = [];
      continue;
    }

    chunk.push(line);
  }
}

function sanitizeLine(line: string) {
  line += " ";

  const chunks = [];
  for (let i = 0; i < line.length / 4; i++) {
    chunks.push(line.substring(i * 4, i * 4 + 4));
  }

  return chunks.reduce((out, chunk) => `${out}${chunk.split("")[1]}`, "");
}

function buildState(input: string[], columns: number) {
  const state: string[][] = Array(columns);

  for (const line of input.slice(0, -1)) {
    for (const [column, char] of line.split("").entries()) {
      if (char === " ") {
        continue;
      }

      if (!state[column]) {
        state[column] = [];
      }

      state[column].unshift(char);
    }
  }

  return state;
}

export async function getInitialState(file: string) {
  let input: string[] = (await getSectionsFromFile(file).next()).value;

  input = input.map(sanitizeLine);

  const maxColumns = input.reduce((max, str) => {
    return str.length > max ? str.length : max;
  }, 0);

  input = input.map((line) => line.padEnd(maxColumns, " "));

  return buildState(input, maxColumns);
}

type Move = {
  count: number;
  from: number;
  to: number;
};

export async function getMoves(file: string) {
  const generator = getSectionsFromFile(file);
  await generator.next();
  let input: string[] = (await generator.next()).value;

  const moves = input
    .map((line) => {
      let matches = line.match(/.*?(\d+).*?(\d+).*?(\d+)/);

      if (matches === null) {
        return;
      }

      return {
        count: Number(matches[1]),
        from: Number(matches[2]),
        to: Number(matches[3]),
      };
    })
    .filter((item) => item !== undefined) as Move[];

  return moves;
}
