import { getLinesFromFile } from "../utils/loadFile.js";
import { Node } from "./fileTree.js";

export async function getTreeFromFile(file: string) {
  let stack: Node[] = [];
  let currentNode: Node = new Node("/", "dir");
  for await (const line of getLinesFromFile(file)) {
    switch (true) {
      case line === "":
      case line === "$ ls":
        break;

      case line === "$ cd /":
        if (stack.length === 0) {
          break;
        }

        currentNode = stack[0];
        stack = [];
        break;

      case line === "$ cd ..":
        currentNode = stack.pop() as Node;
        break;

      case line.startsWith("$ cd"):
        stack.push(currentNode);
        currentNode = currentNode.getNode(line.replace("$ cd ", ""));
        break;

      case line.startsWith("dir "):
        currentNode.addNode(new Node(line.replace("dir ", ""), "dir"));
        break;

      default:
        const [size, name] = line.split(" ", 2);
        currentNode.addNode(new Node(name, "file", Number(size)));
    }
  }

  return stack[0] || currentNode;
}
