import { getLinesFromFile } from "../utils/loadFile.js";
import { decodeMove, Move } from "./move.js";
import { decodeResult, GameResult } from "./game.js";

export async function* getMovesFromFile(
  filename: string
): AsyncGenerator<[Move, Move]> {
  for await (const line of getLinesFromFile(filename)) {
    if (line === "") {
      continue;
    }

    const moves = line.split(" ").map(decodeMove);

    yield [moves[0], moves[1]];
  }
}

export async function* getMoveAndResultFromFile(
  filename: string
): AsyncGenerator<[Move, GameResult]> {
  for await (const line of getLinesFromFile(filename)) {
    if (line === "") {
      continue;
    }

    const parts = line.split(" ");

    const move = decodeMove(parts[0]);
    const result = decodeResult(parts[1]);

    yield [move, result];
  }
}
