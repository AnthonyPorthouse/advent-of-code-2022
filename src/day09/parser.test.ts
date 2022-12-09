import { beforeEach, describe, expect, it } from "vitest";
import { Vector2 } from "../utils/grid.js";
import { doMoveTail } from "./parser.js";

describe("doMoveTail", () => {
  let tail: Vector2 = new Vector2(0, 0);

  beforeEach(() => {
    tail = new Vector2(0, 0);
  });

  it.each([
    // No Move
    { tail, head: new Vector2(0, 0), result: tail },
    { tail, head: new Vector2(1, 1), result: tail },
    { tail, head: new Vector2(-1, -1), result: tail },
    {
      tail: new Vector2(5, 5),
      head: new Vector2(5, 5),
      result: new Vector2(5, 5),
    },

    // Move
    { tail, head: new Vector2(2, 1), result: new Vector2(1, 1) },
    { tail, head: new Vector2(-2, -1), result: new Vector2(-1, -1) },
  ])(
    "moving $tail to $head should be $result",
    async ({ tail, head, result }) => {
      expect(doMoveTail(tail, head)).toEqual(result);
    }
  );
});
