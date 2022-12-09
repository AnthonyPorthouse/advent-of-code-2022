import { describe, expect, it } from "vitest";
import { getTreeFromFile } from "./parser.js";
import { exampleFile } from "./index.js";

describe("getTreeFromFile", () => {
  it("should parse a valid tree from a file", async () => {
    expect((await getTreeFromFile(exampleFile)).getTreeString()).toBe(
      "- / (dir)\n" +
        "  - a (dir)\n" +
        "    - e (dir)\n" +
        "      - i (file, size=584)\n" +
        "    - f (file, size=29116)\n" +
        "    - g (file, size=2557)\n" +
        "    - h.lst (file, size=62596)\n" +
        "  - b.txt (file, size=14848514)\n" +
        "  - c.dat (file, size=8504156)\n" +
        "  - d (dir)\n" +
        "    - j (file, size=4060174)\n" +
        "    - d.log (file, size=8033020)\n" +
        "    - d.ext (file, size=5626152)\n" +
        "    - k (file, size=7214296)"
    );
  });
});
