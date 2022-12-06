import { describe, expect, it } from "vitest";
import { findFirstPacketMarkerIndex, findFirstMessageMarkerIndex } from "./signal.js";

export const examples =

describe('findFirstMarkerIndex', () => {
  it.each([
    {input: 'bvwbjplbgvbhsrlpgdmjqwftvncz', result: 5},
    {input: 'nppdvjthqldpwncqszvftbrmjlhg', result: 6},
    {input: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', result: 10},
    {input: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', result: 11},
  ])('returns $result for $input', async ({input, result}) => {
    expect(findFirstPacketMarkerIndex(input)).toBe(result)
  })
})

describe('findFirstMessageMarkerIndex', () => {
  it.each([
    {input: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb', result: 19},
    {input: 'bvwbjplbgvbhsrlpgdmjqwftvncz', result: 23},
    {input: 'nppdvjthqldpwncqszvftbrmjlhg', result: 23},
    {input: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', result: 29},
    {input: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', result: 26},
  ])('returns $result for $input', async ({input, result}) => {
    expect(findFirstMessageMarkerIndex(input)).toBe(result)
  })
})
