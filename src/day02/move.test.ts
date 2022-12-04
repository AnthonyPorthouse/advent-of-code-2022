import { describe, expect, it } from "vitest";
import { decodeMove, Move } from "./move.js";

describe("decodeMove", () => {
  it.each([
    { input: "A", result: Move.ROCK },
    { input: "X", result: Move.ROCK },
    { input: "B", result: Move.PAPER },
    { input: "Y", result: Move.PAPER },
    { input: "C", result: Move.SCISSORS },
    { input: "Z", result: Move.SCISSORS },
  ])(`should return $result for $input`, async ({ input, result }) => {
    expect(decodeMove(input)).toBe(result);
  });

  it.concurrent("should throw on any other input", async () =>
    expect(() => decodeMove("1")).toThrowError(/not a valid/)
  );
});
