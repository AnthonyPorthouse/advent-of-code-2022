import { createEmptyPointGrid, Vector2, Vector2Grid } from "../utils/grid.js";
import { getLinesFromFile } from "../utils/loadFile.js";
import { debug } from "util";

enum Direction {
  UP = "U",
  LEFT = "L",
  DOWN = "D",
  RIGHT = "R",
}

export async function getMoves(file: string) {
  const moves: [Direction, number][] = [];

  for await (const line of getLinesFromFile(file)) {
    if (line === "") continue;

    moves.push(line.split(" ", 2) as [Direction, number]);
  }

  return moves;
}

export function doMoves(moves: [Direction, number][]) {
  const tailVisited = createEmptyPointGrid();

  let head = new Vector2(0, 0);
  let tail = new Vector2(0, 0);

  tailVisited[tail.toString()] = tail;

  for (const [direction, count] of moves) {
    for (let i = 0; i < count; i++) {
      head = doMove(head, direction);
      tail = doMoveTail(tail, head);
      tailVisited[tail.toString()] = tail;
    }
  }

  return tailVisited;
}

export function doMovesForN(moves: [Direction, number][], n: number) {
  const tailVisited = createEmptyPointGrid();

  let nodes: Vector2[] = [];
  for (let i = 0; i < n; i++) {
    nodes.push(new Vector2(0, 0));
  }

  tailVisited[nodes[n - 1].toString()] = nodes[n - 1];

  for (const [direction, count] of moves) {
    for (let i = 0; i < count; i++) {
      nodes = nodes.reduce((nodes, node, index) => {
        if (index === 0) {
          nodes.push(doMove(node, direction));
          return nodes;
        }

        nodes.push(doMoveTail(node, nodes[nodes.length - 1]));
        return nodes;
      }, [] as Vector2[]);

      let tail = nodes[nodes.length - 1];

      tailVisited[tail.toString()] = tail;
    }
  }

  return tailVisited;
}

function doMove(current: Vector2, direction: Direction) {
  switch (direction) {
    case Direction.UP:
      return new Vector2(current.x, current.y - 1);
    case Direction.DOWN:
      return new Vector2(current.x, current.y + 1);
    case Direction.LEFT:
      return new Vector2(current.x - 1, current.y);
    case Direction.RIGHT:
      return new Vector2(current.x + 1, current.y);
  }
}
export function doMoveTail(tail: Vector2, head: Vector2) {
  const difference = tail.getDistance(head);

  switch (difference.toString()) {
    case "-2,-1": // 2 left 1 up
    case "-1,-2": // 2 up 1 left
    case "-2,-2": // 2 up 2 left
      return new Vector2(tail.x - 1, tail.y - 1);
    case "-2,1": // 2 left 1 down
    case "-1,2": // 2 down 1 left
    case "-2,2": // 2 down 2 left
      return new Vector2(tail.x - 1, tail.y + 1);
    case "2,-1": // 2 right 1 up
    case "1,-2": // 2 up 1 right
    case "2,-2": // 2 up 2 right
      return new Vector2(tail.x + 1, tail.y - 1);
    case "2,1": // 2 right 1 down
    case "1,2": // 2 down 1 right
    case "2,2": // 2 down 2 right
      return new Vector2(tail.x + 1, tail.y + 1);

    case "-2,0": // 2 left
      return new Vector2(tail.x - 1, tail.y);
    case "2,0": // 2 right
      return new Vector2(tail.x + 1, tail.y);
    case "0,-2": // 2 up
      return new Vector2(tail.x, tail.y - 1);
    case "0,2": // 2 down
      return new Vector2(tail.x, tail.y + 1);

    default: // anything else
      return new Vector2(tail.x, tail.y);
  }
}

export function drawGrid(grid: Vector2Grid) {
  let minX = 0,
    maxX = 0,
    minY = 0,
    maxY = 0;
  Object.values(grid).forEach((point) => {
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  });

  let out = "";

  for (let y = minY - 1; y <= maxY + 1; y++) {
    for (let x = minX - 1; x <= maxX + 1; x++) {
      if (x === 0 && y === 0) {
        out += "s";
        continue;
      }

      out += Object.keys(grid).includes(`${x},${y}`) ? "#" : ".";
    }
    out += "\n";
  }

  return out;
}
