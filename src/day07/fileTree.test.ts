import { beforeEach, describe, expect, it } from "vitest";
import { Node } from "./fileTree.js";
import exp from "constants";

describe("Node", () => {
  it("can print directory lines correctly", async () => {
    const file = new Node("test", "dir");
    expect(file.toString()).toBe("test (dir)");
  });

  it("can print file lines correctly", async () => {
    const file = new Node("test", "file", 1024);
    expect(file.toString()).toBe("test (file, size=1024)");
  });

  describe("given a tree", () => {
    let tree: Node;
    beforeEach(() => {
      tree = new Node("/", "dir");
      tree.addNode(new Node("a", "file", 128));

      const tree2 = new Node("b", "dir");
      tree.addNode(tree2);
      tree2.addNode(new Node("c", "file", 256));

      tree.addNode(new Node("d", "file", 512));
    });

    it("can get a recursive tree correctly", async () => {
      expect(tree.getTreeString()).toBe(
        "- / (dir)\n" +
          "  - a (file, size=128)\n" +
          "  - b (dir)\n" +
          "    - c (file, size=256)\n" +
          "  - d (file, size=512)"
      );
    });

    it("can recursively calculate total tree size", async () => {
      expect(tree.getTotalSize()).toBe(896);
    });

    it("can return a node with the smallest directory at least as big as a value given", async () => {
      expect(tree.getSmallestDirectoryWithMinSize(192, tree).name).toBe("b");
    });
  });
});
