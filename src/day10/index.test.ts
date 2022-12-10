import { describe, expect, it } from "vitest";
import { exampleFile, runPart1, runPart2 } from "./index.js";

describe("runPart1", () => {
  it("should return 13140", async () => {
    expect(await runPart1(exampleFile)).toBe(13140);
  });
});

describe("runPart2", () => {
  it("should return the given output", async () => {
    expect(await runPart2(exampleFile)).toBe(
      "##..##..##..##..##..##..##..##..##..##..\n" +
        "###...###...###...###...###...###...###.\n" +
        "####....####....####....####....####....\n" +
        "#####.....#####.....#####.....#####.....\n" +
        "######......######......######......####\n" +
        "#######.......#######.......#######.....\n"
    );
  });
});
