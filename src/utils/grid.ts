export type NumericGrid = number[][];

export class Vector2 {
  public readonly x: number;
  public readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getDistance(other: Vector2) {
    return new Vector2(other.x - this.x, other.y - this.y);
  }

  toString() {
    return `${this.x},${this.y}`;
  }
}

export type Vector2Grid = { [key: string]: Vector2 };

export function inputToNumericGrid(
  input: string[],
  separator: string = ""
): NumericGrid {
  return input.map((row) => row.split(separator).map(Number));
}

export function createEmptyPointGrid(): Vector2Grid {
  return {};
}
