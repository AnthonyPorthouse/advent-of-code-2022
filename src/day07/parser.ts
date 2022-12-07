import { getLinesFromFile } from "../utils/loadFile.js";
import { Node } from './fileTree.js'

export async function getTreeFromFile(file: string) {
  let stack: Node[] = []
  let currentNode: Node = new Node('/', 'dir');
  for await (const line of getLinesFromFile(file)) {
    if (line === '') {
      continue
    }

    // Change to root
    if (line === '$ cd /') {
      if (stack.length === 0) {
        continue
      }

      currentNode = stack[0]
      stack = []
      continue
    }

    // Back down a level
    if (line === '$ cd ..') {
      currentNode = stack.pop() as Node
      continue
    }

    // Change into a given subdirctory
    if (line.startsWith('$ cd')) {
      stack.push(currentNode)
      currentNode = currentNode.getNode(line.replace('$ cd ', ''))
      continue
    }

    // This is not needed
    if (line == '$ ls') {
      continue
    }

    // Add a directory
    if (line.startsWith('dir ')) {
      currentNode.addNode(new Node(line.replace('dir ', ''), 'dir'))
      continue
    }

    // Add a file
    const [size, name] = line.split(' ', 2);
    currentNode.addNode(new Node(name, 'file', Number(size)))
  }

  if (stack.length > 0) {
    return stack[0]
  }

  return currentNode
}
