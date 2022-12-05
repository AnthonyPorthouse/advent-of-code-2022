import { describe, expect, it } from "vitest";
import { exampleFile, runPart1, runPart2 } from "./index.js";

describe("runPart1", () => {
  it("should return CMZ", async () => {
    expect(await runPart1(exampleFile)).toBe("CMZ");
  });
});
describe("runPart2", () => {
  it("should return MCD", async () => {
    expect(await runPart2(exampleFile)).toBe("MCD");
  });
});
