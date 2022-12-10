import { describe, expect, it } from "vitest";
import { runInstructions } from "./parser.js";
import { exampleFile } from "./index.js";

describe("runInstructions", () => {
  it("should successfully execute instructions", async () => {
    let generator = runInstructions(exampleFile);

    expect((await generator.next()).value).toBe(1);
    expect((await generator.next()).value).toBe(1);
    expect((await generator.next()).value).toBe(16);
    expect((await generator.next()).value).toBe(16);
    expect((await generator.next()).value).toBe(5);
  });
});
