import { describe, expect, it } from "vitest";
import { inputToNumericGrid, Vector2 } from "./grid.js";

describe("inputToNumericGrid", () => {
  it("can turn a string[] to a numeric grid", () => {
    expect(inputToNumericGrid(["123", "456", "789"])).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});

describe("Vector2", () => {
  it.each([
    {
      first: new Vector2(0, 0),
      second: new Vector2(2, 2),
      result: new Vector2(2, 2),
    },
    {
      first: new Vector2(5, 5),
      second: new Vector2(2, 2),
      result: new Vector2(-3, -3),
    },
  ])(
    "should return $result when getting the distance between $first and $second",
    ({ first, second, result }) => {
      expect(first.getDistance(second)).toStrictEqual(result);
    }
  );
});
