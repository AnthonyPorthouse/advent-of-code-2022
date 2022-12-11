import { describe, expect, expectTypeOf, it } from "vitest";
import { getMonkeysFromFile } from "./parser.js";
import { exampleFile } from "./index.js";
import { Monkey } from "./monkey.js";

describe("getMonkeysFromFile", () => {
  it("should return monkey instances", async () => {
    const monkey = (await getMonkeysFromFile(exampleFile).next())
      .value as Monkey;

    expectTypeOf(Monkey).toBeObject();

    expect(monkey.id).toBe(0);
    expect(monkey.items).toEqual([79, 98]);
    expect(monkey.test).toEqual(23);
    expect(monkey.operation).toEqual(["old", "*", "19"]);
    expect(monkey.successId).toBe(2);
    expect(monkey.failureId).toBe(3);
  });
});
