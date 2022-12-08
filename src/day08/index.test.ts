import { describe, expect, it } from "vitest";
import { exampleFile, runPart1 } from "./index.js";

describe('runPart1', () => {
  it('should return 21', async () => {
    expect(await runPart1(exampleFile)).toBe(21)
  })
})

// describe('runPart2', () => {
//   it('should return 24933642', async () => {
//     expect(await runPart2(exampleFile, 70000000, 30000000)).toBe(24933642)
//   })
// })
