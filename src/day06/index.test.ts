import { describe, expect, it } from "vitest";
import {
  exampleFile1,
  exampleFile2,
  exampleFile3,
  exampleFile4,
  runPart1,
  runPart2,
} from "./index.js";

describe("runPart1", () => {
  it.each([
    { file: exampleFile1, result: 5 },
    { file: exampleFile2, result: 6 },
    { file: exampleFile3, result: 10 },
    { file: exampleFile4, result: 11 },
  ])("should return $result for $file", async ({ file, result }) => {
    expect(await runPart1(file)).toBe(result);
  });
});

describe("runPart2", () => {
  it.each([
    { file: exampleFile1, result: 23 },
    { file: exampleFile2, result: 23 },
    { file: exampleFile3, result: 29 },
    { file: exampleFile4, result: 26 },
  ])("should return $result for $file", async ({ file, result }) => {
    expect(await runPart2(file)).toBe(result);
  });
});
