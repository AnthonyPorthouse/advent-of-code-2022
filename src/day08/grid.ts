import { NumericGrid } from "../utils/grid.js";

type Vector2 = [number, number];

export function findVisibleFromOutside(input: NumericGrid) {
  let results: { [key: string]: boolean } = {};

  const rows = input.length;
  const cols = input[0].length;

  for (let y = 0; y < rows; y++) {
    results = Object.assign({}, results, findVisibleInRow(input, y));
  }

  for (let x = 0; x < cols; x++) {
    results = Object.assign({}, results, findVisibleInColumn(input, x));
  }

  return Object.keys(results).length;
}

function findVisibleInColumn(input: NumericGrid, x: number) {
  const visible: { [key: string]: boolean } = {};

  let currentHighest = -1;
  // left to right
  for (let y = 0; y < input.length; y++) {
    const value = input[y][x];
    if (value > currentHighest) {
      visible[`${x},${y}`] = true;
      currentHighest = value;
    }
    if (currentHighest == 9) {
      break;
    }
  }

  // right to left
  currentHighest = -1;
  for (let y = input.length - 1; y >= 0; y--) {
    const value = input[y][x];
    if (value > currentHighest) {
      visible[`${x},${y}`] = true;
      currentHighest = value;
    }
    if (currentHighest == 9) {
      break;
    }
  }

  return visible;
}

function findVisibleInRow(input: NumericGrid, y: number) {
  const visible: { [key: string]: boolean } = {};

  let currentHighest = -1;
  // top to bottom
  for (let x = 0; x < input[y].length; x++) {
    const value = input[y][x];
    if (value > currentHighest) {
      visible[`${x},${y}`] = true;
      currentHighest = value;
    }

    if (currentHighest == 9) {
      break;
    }
  }

  // bottom to top
  currentHighest = -1;
  for (let x = input[y].length - 1; x >= 0; x--) {
    const value = input[y][x];
    if (value > currentHighest) {
      visible[`${x},${y}`] = true;
      currentHighest = value;
    }

    if (currentHighest == 9) {
      break;
    }
  }

  return visible;
}

export function getBestScenicScore(input: NumericGrid) {
  let bestScore = 0;

  const rows = input.length;
  const cols = input[0].length;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const score = getScenicScore(input, [x, y]);

      if (score > bestScore) {
        bestScore = score;
      }
    }
  }

  return bestScore;
}

function getScenicScore(input: NumericGrid, from: Vector2) {
  const [originX, originY] = from;

  let maxHeight = input[originY][originX];

  // Check Up
  let yPosScore = 0;
  for (let y = originY - 1; y >= 0; y--) {
    yPosScore += 1;

    if (input[y][originX] >= maxHeight) {
      break;
    }
  }

  // Check Down
  let yNegScore = 0;
  for (let y = originY + 1; y < input.length; y++) {
    yNegScore += 1;

    if (input[y][originX] >= maxHeight) {
      break;
    }
  }

  // Check Left
  let xPosScore = 0;
  for (let x = originX - 1; x >= 0; x--) {
    xPosScore += 1;

    if (input[originY][x] >= maxHeight) {
      break;
    }
  }

  // Check Right
  let xNegScore = 0;
  for (let x = originX + 1; x < input.length; x++) {
    xNegScore += 1;

    if (input[originY][x] >= maxHeight) {
      break;
    }
  }

  return xPosScore * xNegScore * yPosScore * yNegScore;
}
