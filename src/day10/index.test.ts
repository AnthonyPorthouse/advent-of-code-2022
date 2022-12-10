import { describe, expect, it } from "vitest";
import { exampleFile, runPart1 } from "./index.js";

describe("runPart1", () => {
  it("should return 13140", async () => {
    expect(await runPart1(exampleFile)).toBe(13140);
  });
});
