import { open } from "node:fs/promises";

/**
 * Loads a file line by line, yielding a line at a time.
 *
 * Final yield will always be an empty string to allow multi-loop behaviours a chance to finish.
 *
 * @param filename The filename of the file to load
 */
export async function* getLinesFromFile(
  filename: string
): AsyncGenerator<string> {
  const file = await open(filename);

  for await (const line of file.readLines()) {
    yield line;
  }

  await file.close();

  yield "";
}
