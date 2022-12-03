import { describe, expect, it } from "vitest";
import { decodeMove, Move } from "./move.js";

describe('decodeMove', () => {
  it.concurrent('should return rock for A', async () => expect(decodeMove('A')).toBe(Move.ROCK))
  it.concurrent('should return rock for X', async () => expect(decodeMove('X')).toBe(Move.ROCK))
  it.concurrent('should return paper for B', async () => expect(decodeMove('B')).toBe(Move.PAPER))
  it.concurrent('should return paper for Y', async () => expect(decodeMove('Y')).toBe(Move.PAPER))
  it.concurrent('should return scissors for C', async () => expect(decodeMove('C')).toBe(Move.SCISSORS))
  it.concurrent('should return scissors for Z', async () => expect(decodeMove('Z')).toBe(Move.SCISSORS))
  it.concurrent('should throw on any other input', async () => expect(() => decodeMove('1')).toThrowError(/not a valid/))
})