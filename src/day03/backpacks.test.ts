import { describe, expect, it } from "vitest";
import {
  getFullBackpacksFromFile,
  getItemInAllBackpacks,
  getItemInBothBackpacks,
} from "./backpacks.js";

const exampleFile = new URL(`./example.txt`, import.meta.url).pathname;

describe("backpacks", () => {
  describe("getFullBackpacksFromFile", async () => {
    it("should return a generator with Backpacks", async () => {
      const generator = getFullBackpacksFromFile(exampleFile);

      expect((await generator.next()).value).toStrictEqual([
        "v",
        "J",
        "r",
        "w",
        "p",
        "W",
        "t",
        "w",
        "J",
        "g",
        "W",
        "r",
        "h",
        "c",
        "s",
        "F",
        "M",
        "M",
        "f",
        "F",
        "F",
        "h",
        "F",
        "p",
      ]);
      expect((await generator.next()).value).toStrictEqual([
        "j",
        "q",
        "H",
        "R",
        "N",
        "q",
        "R",
        "j",
        "q",
        "z",
        "j",
        "G",
        "D",
        "L",
        "G",
        "L",
        "r",
        "s",
        "F",
        "M",
        "f",
        "F",
        "Z",
        "S",
        "r",
        "L",
        "r",
        "F",
        "Z",
        "s",
        "S",
        "L",
      ]);
      expect((await generator.next()).value).toStrictEqual("PmmdzqPrVvPwwTWBwg".split(''));
      expect((await generator.next()).value).toStrictEqual("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn".split(''));
      expect((await generator.next()).value).toStrictEqual("ttgJtRGJQctTZtZT".split(''));
      expect((await generator.next()).value).toStrictEqual("CrZsJsPPZsGzwwsLwLmpwMDw".split(''));
      expect((await generator.next()).value).toBeUndefined();

    });
  });

  describe("getItemInBothBackpacks", async () => {
    it("should return items in both backpacks", async () => {
      expect(getItemInBothBackpacks(["a", "b", "c"], ["c", "d", "e"])).toBe(
        "c"
      );
    });
  });

  describe("getItemInAllBackpacks", async () => {
    it("should return items that exist in two backpacks", async () => {
      expect(getItemInAllBackpacks(["a", "b", "c"], ["c", "d", "e"])).toBe("c");
    });

    it("should return items that exist in more than two backpacks", async () => {
      expect(
        getItemInAllBackpacks(["a", "b", "c"], ["c", "d", "e"], ["c", "f", "g"])
      ).toBe("c");
    });
  });
});
