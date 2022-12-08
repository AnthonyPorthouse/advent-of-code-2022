import { describe, expect, it } from "vitest";
import { exampleFile, runPart1, runPart2 } from "./index.js";

describe('runPart1', () => {
  it('should return 21', async () => {
    expect(await runPart1(exampleFile)).toBe(21)
  })
})

describe('runPart2', () => {
  it('should return 8', async () => {
    expect(await runPart2(exampleFile)).toBe(8)
  })
})
