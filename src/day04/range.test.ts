import { describe, it, expect } from "vitest";
import { Range } from "./range.js";

describe("Range", () => {
  describe("containsRange", async () => {
    it("should return true if both ranges have the same values", async () => {
      const range = new Range(1, 2);
      const range2 = new Range(1, 2);

      expect(range.containsRange(range2)).toBe(true);
    });

    it("should return true if the first range is wider than the second", async () => {
      const range = new Range(1, 4);
      const range2 = new Range(2, 3);

      expect(range.containsRange(range2)).toBe(true);
    });

    it("should return false if the first does not fully cover the second", async () => {
      const range = new Range(1, 2);
      const range2 = new Range(2, 3);

      expect(range.containsRange(range2)).toBe(false);
    });
  });

  describe("overlapsRange", async () => {
    it("should return true if either range has overlap", async () => {
      const range = new Range(1, 2);
      const range2 = new Range(2, 3);

      expect(range.overlapsRange(range2)).toBe(true);
    });
  });
});
