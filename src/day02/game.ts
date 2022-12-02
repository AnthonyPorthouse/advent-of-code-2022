import { Move } from "./move.js";

export enum GameResult {
  WIN,
  LOSE,
  TIE,
}

export function decodeResult(input: string) {
  switch (input) {
    case "X":
      return GameResult.LOSE;
    case "Y":
      return GameResult.TIE;
    case "Z":
      return GameResult.WIN;
  }

  throw Error(`${input} is not a valid encoded game result`);
}

export function calculateCorrectMove(
  firstMove: Move,
  targetResult: GameResult
) {
  if (targetResult === GameResult.TIE) {
    return firstMove;
  }

  if (targetResult === GameResult.LOSE) {
    switch (firstMove) {
      case Move.ROCK:
        return Move.SCISSORS;
      case Move.PAPER:
        return Move.ROCK;
      case Move.SCISSORS:
        return Move.PAPER;
    }
  }

  switch (firstMove) {
    case Move.ROCK:
      return Move.PAPER;
    case Move.PAPER:
      return Move.SCISSORS;
    case Move.SCISSORS:
      return Move.ROCK;
  }
}

export function calculateGameResult(input: [Move, Move]) {
  const [move1, move2] = input;

  if (move1 === move2) {
    return GameResult.TIE;
  }

  if (
    (move1 === Move.PAPER && move2 === Move.ROCK) ||
    (move1 === Move.ROCK && move2 === Move.SCISSORS) ||
    (move1 === Move.SCISSORS && move2 === Move.PAPER)
  ) {
    return GameResult.LOSE;
  }

  return GameResult.WIN;
}

export function moveScore(move: Move) {
  switch (move) {
    case Move.ROCK:
      return 1;
    case Move.PAPER:
      return 2;
    case Move.SCISSORS:
      return 3;
  }
}

export function resultScore(result: GameResult) {
  switch (result) {
    case GameResult.LOSE:
      return 0;
    case GameResult.TIE:
      return 3;
    case GameResult.WIN:
      return 6;
  }
}
