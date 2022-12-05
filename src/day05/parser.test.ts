import { beforeAll, describe, expect, it } from "vitest";
import { getInitialState, getMoves } from "./parser.js";
import { exampleFile } from "./index.js";

describe("getInitialState", () => {
  let state: string[][];
  beforeAll(async () => {
    state = await getInitialState(exampleFile);
  });

  it("should calculate starting state", async () => {
    expect(state).toEqual([["Z", "N"], ["M", "C", "D"], ["P"]]);
  });
});

describe("getMoves", () => {
  it("should return move definitions", async () => {
    expect(await getMoves(exampleFile)).toEqual([
      { count: 1, from: 2, to: 1 },
      { count: 3, from: 1, to: 3 },
      { count: 2, from: 2, to: 1 },
      { count: 1, from: 1, to: 2 },
    ]);
  });
});
