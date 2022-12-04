import { describe, expect, it } from "vitest";
import { exampleFile, runPart1, runPart2 } from "./index.js";

describe("runPart1", () => {
  it("should return 157", async () => {
    expect(await runPart1(exampleFile)).toBe(157);
  });
});

describe("runPart2", () => {
  it("should return 70", async () => {
    expect(await runPart2(exampleFile)).toBe(70);
  });
});
