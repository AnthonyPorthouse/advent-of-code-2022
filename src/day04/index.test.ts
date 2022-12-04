import { describe, expect, it } from "vitest";
import { exampleFile, runPart1, runPart2 } from "./index.js";

describe("runPart1", () => {
  it("should return 2", async () => {
    expect(await runPart1(exampleFile)).toBe(2);
  });
});
describe("runPart2", () => {
  it("should return 4", async () => {
    expect(await runPart2(exampleFile)).toBe(4);
  });
});
