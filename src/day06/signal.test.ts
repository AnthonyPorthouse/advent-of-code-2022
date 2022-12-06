import { describe, expect, it } from "vitest";
import { findFirstMarkerIndex } from "./signal.js";

export const examples = [
  {input: 'bvwbjplbgvbhsrlpgdmjqwftvncz', part1Result: 5},
  {input: 'nppdvjthqldpwncqszvftbrmjlhg', part1Result: 6},
  {input: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', part1Result: 10},
  {input: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', part1Result: 11},
]

describe('findFirstMarker', () => {
  it.each(examples)('returns $part1Result for $input', async ({input, part1Result}) => {
    expect(findFirstMarkerIndex(input)).toBe(part1Result)
  })
})
