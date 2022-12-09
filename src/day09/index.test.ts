import { describe, expect, it } from "vitest";
import { example2File, exampleFile, runPart1, runPart2 } from "./index.js";

describe("runPart1", () => {
  it("should return 13", async () => {
    expect(await runPart1(exampleFile)).toBe(13);
  });
});

describe("runPart2", () => {
  it("should return 36", async () => {
    expect(await runPart2(example2File)).toBe(36);
  });
});
