import { describe, expect, expectTypeOf, it } from "vitest";
import { parseRangePairsFromFile } from "./parser.js";
import { Range } from "./range.js";
import { exampleFile } from "./index.js";

describe("parseRangePairsFromFile", () => {
  it("loads pairs of ranges", async () => {
    const generator = parseRangePairsFromFile(exampleFile);

    const [first, second] = (await generator.next()).value;

    expectTypeOf(first).toMatchTypeOf<Range>();
    expectTypeOf(second).toMatchTypeOf<Range>();
    expect(first.toString()).toBe("2-4");
    expect(second.toString()).toBe("6-8");
  });
});
