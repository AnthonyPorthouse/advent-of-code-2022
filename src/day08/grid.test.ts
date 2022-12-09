import { describe, expect, it } from "vitest";
import { findVisibleFromOutside } from "./grid.js";

describe("findVisibleFromOutside", () => {
  it("should return all outside values", async () => {
    expect(
      findVisibleFromOutside([
        [2, 2, 2],
        [2, 1, 2],
        [2, 1, 2],
        [2, 2, 2],
      ])
    ).toBe(10);
  });

  it("should return inside values", async () => {
    expect(
      findVisibleFromOutside([
        [2, 2, 2],
        [2, 3, 2],
        [2, 1, 2],
        [2, 2, 2],
      ])
    ).toBe(11);
  });
});
