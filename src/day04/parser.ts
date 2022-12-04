import { getLinesFromFile } from "../utils/loadFile.js";
import { Range } from "./range.js";

export async function* parseRangePairsFromFile(
  filename: string
): AsyncGenerator<[Range, Range]> {
  for await (const line of getLinesFromFile(filename)) {
    if (line === "") continue;

    yield line.split(",").map((pair) => {
      const [min, max] = pair.split("-").map(Number);
      return new Range(min, max);
    }) as [Range, Range];
  }
}
