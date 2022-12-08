import { describe, expect, it } from "vitest";
import { inputToNumericGrid } from "./grid.js";

describe('inputToNumericGrid', () => {
  it('can turn a string[] to a numeric grid', () => {
    expect(inputToNumericGrid(['123', '456', '789'])).toStrictEqual([
      [1, 2, 3], [4,5,6],[7,8,9]
    ])
  })
})
