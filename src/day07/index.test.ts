import { describe, expect, it } from "vitest";
import { exampleFile, runPart1, runPart2 } from "./index.js";

describe('runPart1', () => {
  it('should return 95437', async () => {
    expect(await runPart1(exampleFile)).toBe(95437)
  })
})

describe('runPart2', () => {
  it('should return 24933642', async () => {
    expect(await runPart2(exampleFile, 70000000, 30000000)).toBe(24933642)
  })
})
