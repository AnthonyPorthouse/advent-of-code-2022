import { open } from "node:fs/promises";

export async function* getLinesFromFile(
  filename: string
): AsyncGenerator<string> {
  const file = await open(filename);

  for await (const line of file.readLines()) {
    yield line;
  }

  yield "";
}
