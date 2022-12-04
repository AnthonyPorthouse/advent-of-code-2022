import { describe, expect, it } from "vitest";
import { exampleFile, runPart1, runPart2 } from "./index.js";

describe("runPart1", () => {
  it("should return 15", async () => {
    expect(await runPart1(exampleFile)).toBe(15);
  });
});

describe("runPart2", () => {
  it("should return 12", async () => {
    expect(await runPart2(exampleFile)).toBe(12);
  });
});
