import { describe, expect, it } from "vitest";
import { getItemScore } from "./item.js";

describe("getItemScore", () => {
  it("should return 1 for a", async () => {
    expect(getItemScore("a")).toBe(1);
  });
  it("should return 52 for Z", async () => {
    expect(getItemScore("Z")).toBe(52);
  });
  it("should return 0 for any invalid value", async () => {
    expect(getItemScore("$")).toBe(0);
  });
});
