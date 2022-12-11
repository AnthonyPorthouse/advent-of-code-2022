import { getLinesFromFile } from "../utils/loadFile.js";
import { Monkey, MonkeyDefinition } from "./monkey.js";

export async function* getMonkeysFromFile(filename: string) {
  let monkeyData = [];

  for await (const line of getLinesFromFile(filename)) {
    if (line === "") {
      yield new Monkey(monkeyData as MonkeyDefinition);

      monkeyData = [];
      continue;
    }

    monkeyData.push(line.trim());
  }
}
