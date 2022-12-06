import { getLinesFromFile } from "../utils/loadFile.js";
import { findFirstPacketMarkerIndex, findFirstMessageMarkerIndex } from "./signal.js";

export const exampleFile1 = new URL("./example1.txt", import.meta.url).pathname;
export const exampleFile2 = new URL("./example2.txt", import.meta.url).pathname;
export const exampleFile3 = new URL("./example3.txt", import.meta.url).pathname;
export const exampleFile4 = new URL("./example4.txt", import.meta.url).pathname;
export const inputFile = new URL("./input.txt", import.meta.url).pathname;

export async function runPart1(filename: string) {
  console.time(`Day 06 Part 1 ${filename}`);

  let result
  for await(const line of getLinesFromFile(filename)) {
    if (result) {
      continue
    }

    result = findFirstPacketMarkerIndex(line)
  }

  console.timeEnd(`Day 06 Part 1 ${filename}`);

  return result
}

export async function runPart2(filename: string) {
  console.time(`Day 06 Part 2 ${filename}`);

  let result
  for await(const line of getLinesFromFile(filename)) {
    if (result) {
      continue
    }

    result = findFirstMessageMarkerIndex(line)
  }

  console.timeEnd(`Day 06 Part 2 ${filename}`);

  return result
}

console.log(`First Packet Marker: ${await runPart1(inputFile)}`);
console.log(`First Message Marker: ${await runPart2(inputFile)}`);
