import { getLinesFromFile } from "../utils/loadFile.js";

export type Backpack = string[];

export async function* getBackpacksFromFile(
  filename: string
): AsyncGenerator<[Backpack, Backpack]> {
  for await (const items of getFullBackpacksFromFile(filename)) {
    const halves: [Backpack, Backpack] = [
      items.slice(0, items.length / 2),
      items.slice(items.length / 2),
    ];

    yield halves;
  }
}

export async function* getFullBackpacksFromFile(
  filename: string
): AsyncGenerator<Backpack> {
  for await (const line of getLinesFromFile(filename)) {
    if (line.length === 0) {
      continue;
    }

    yield line.split("");
  }
}

export function getItemInBothBackpacks(a: Backpack, b: Backpack) {
  return getItemInAllBackpacks(a, b);
}

export function getItemInAllBackpacks(
  backpack: Backpack,
  ...backpacks: Backpack[]
) {
  return backpack.filter((item) =>
    backpacks.every((backpack) => backpack.includes(item))
  )[0];
}
