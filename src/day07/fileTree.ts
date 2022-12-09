import memoizee from "memoizee";

type NodeType = "file" | "dir";

export class Node {
  name: string;
  type: NodeType;
  readonly size: number = 0;
  contents: { [key: string]: Node } = {};

  constructor(name: string, type: NodeType, size: number = 0) {
    this.name = name;
    this.type = type;
    this.size = size;

    this.getTotalSize = memoizee(this.getTotalSize);
  }

  getTotalSize() {
    if (this.type === "file") {
      return this.size;
    }

    let size = 0;

    for (const node of this.getContents()) {
      size += node.getTotalSize();
    }

    return size;
  }

  getDirectoriesWithMaxSize(size: number, dirs: Node[] = []) {
    for (const dir of this.getContents().filter(
      (node) => node.type === "dir"
    )) {
      if (dir.getTotalSize() <= size) {
        dirs.push(dir);
      }

      dirs = dir.getDirectoriesWithMaxSize(size, dirs);
    }

    return dirs;
  }

  getSmallestDirectoryWithMinSize(minSize: number, currentSmallest: Node) {
    for (const dir of this.getContents().filter(
      (node) => node.type === "dir"
    )) {
      if (
        dir.getTotalSize() >= minSize &&
        dir.getTotalSize() < currentSmallest.getTotalSize()
      ) {
        currentSmallest = dir;
      }

      currentSmallest = dir.getSmallestDirectoryWithMinSize(
        minSize,
        currentSmallest
      );
    }

    return currentSmallest;
  }

  addNode(node: Node) {
    this.contents[node.name] = node;
  }

  getNode(name: string) {
    return this.contents[name];
  }

  getContents() {
    return Object.values(this.contents);
  }

  getTreeString(depth: number = 0) {
    let out: string[] = [];

    out.push(`${"".padStart(depth * 2, " ")}- ${this.toString()}`);

    if (this.type === "dir") {
      for (const node of this.getContents()) {
        out.push(node.getTreeString(depth + 1));
      }
    }

    return out.join("\n");
  }

  toString() {
    if (this.type === "dir") {
      return `${this.name} (dir)`;
    }

    return `${this.name} (file, size=${this.size})`;
  }
}
