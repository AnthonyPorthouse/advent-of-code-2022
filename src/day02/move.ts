export enum Move {
  ROCK,
  PAPER,
  SCISSORS,
}

export function decodeMove(input: string) {
  switch (input) {
    case "A":
    case "X":
      return Move.ROCK;
    case "B":
    case "Y":
      return Move.PAPER;
    case "C":
    case "Z":
      return Move.SCISSORS;
  }

  throw Error(`${input} is not a valid encoded move`);
}
