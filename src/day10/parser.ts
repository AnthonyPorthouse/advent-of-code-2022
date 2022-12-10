import { getLinesFromFile } from "../utils/loadFile.js";

interface Instruction {
  name: "noop" | "addx";
  duration: number;
  value?: number;
}

export async function* getInstructions(
  filename: string
): AsyncGenerator<Instruction> {
  for await (const line of getLinesFromFile(filename)) {
    const [name, value] = line.split(" ", 2);

    switch (name) {
      case "noop":
        yield { name: "noop", duration: 1 };
        break;
      case "addx":
        yield { name: "addx", duration: 2, value: Number(value) };
    }
  }
}

export async function* runInstructions(filename: string) {
  let xRegister = 1;

  for await (const instruction of getInstructions(filename)) {
    for (let cycle = 0; cycle < instruction.duration; cycle++) {
      yield xRegister;
    }

    if (instruction.value) {
      xRegister += instruction.value;
    }
  }
}
