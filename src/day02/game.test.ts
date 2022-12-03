import { describe, expect, test } from "vitest";
import { calculateCorrectMove, calculateGameResult, decodeResult, GameResult, moveScore, resultScore } from "./game.js";
import { Move } from "./move.js";

describe('moveScore', () => {
  test('returns 1 for rock', async () => {
    expect(moveScore(Move.ROCK)).toBe(1)
  })
  test('returns 2 for paper', async () => {
    expect(moveScore(Move.PAPER)).toBe(2)
  })
  test('returns 3 for scissors', async () => {
    expect(moveScore(Move.SCISSORS)).toBe(3)
  })
})

describe('resultScore', () => {
  test('returns 0 for a lose', async () => {
    expect(resultScore(GameResult.LOSE)).toBe(0)
  })
  test('returns 3 for a tie', async () => {
    expect(resultScore(GameResult.TIE)).toBe(3)
  })
  test('returns 6 for a win', async () => {
    expect(resultScore(GameResult.WIN)).toBe(6)
  })
})

describe('decodeResult', () => {
  test('returns lose for X', async () => {
    expect(decodeResult('X')).toBe(GameResult.LOSE)
  })
  test('returns tie for Y', async () => {
    expect(decodeResult('Y')).toBe(GameResult.TIE)
  })
  test('returns win for Z', async () => {
    expect(decodeResult('Z')).toBe(GameResult.WIN)
  })
  test('throws error on bad input', async () => {
    expect(() => decodeResult('A')).toThrowError(/is not a valid/)
  })
})

describe('calculateGameResult', () => {

  test('same input returns a tie', async () => {
    expect(calculateGameResult([Move.ROCK, Move.ROCK])).toBe(GameResult.TIE)
  })

  test.each([
    { a: Move.ROCK, b: Move.PAPER, result: GameResult.WIN },
    { a: Move.ROCK, b: Move.SCISSORS, result: GameResult.LOSE },
    { a: Move.SCISSORS, b: Move.ROCK, result: GameResult.WIN },
    { a: Move.SCISSORS, b: Move.PAPER, result: GameResult.LOSE },
    { a: Move.PAPER, b: Move.SCISSORS, result: GameResult.WIN },
    { a: Move.PAPER, b: Move.ROCK, result: GameResult.LOSE },
  ])('$a vs $b = $result', async ({ a, b, result }) => {
    expect(calculateGameResult([a, b])).toBe(result)
  })
})

describe("calculateCorrectMove", () => {
  test('return same value on target tie', async () => {
    expect(calculateCorrectMove(Move.ROCK, GameResult.TIE)).toBe(Move.ROCK)
  })

  test.each([
    {name: 'target LOSE: rock', a: Move.ROCK, result: Move.SCISSORS},
    {name: 'target LOSE: paper', a: Move.PAPER, result: Move.ROCK},
    {name: 'target LOSE: scissors', a: Move.SCISSORS, result: Move.PAPER},
  ])('$name', async ({a, result}) => {
    expect(calculateCorrectMove(a, GameResult.LOSE)).toBe(result)
  })

  test.each([
    {name: 'target WIN: rock', a: Move.ROCK, result: Move.PAPER},
    {name: 'target WIN: paper', a: Move.PAPER, result: Move.SCISSORS},
    {name: 'target WIN: scissors', a: Move.SCISSORS, result: Move.ROCK},
  ])('$name', async ({a, result}) => {
    expect(calculateCorrectMove(a, GameResult.WIN)).toBe(result)
  })
});