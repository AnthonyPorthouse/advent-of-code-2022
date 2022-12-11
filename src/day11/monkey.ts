export type MonkeyDefinition = [string, string, string, string, string, string];

export type MonkeyList = { [index: number]: Monkey };

export class Monkey {
  public readonly id: number;
  public items: number[] = [];
  public readonly operation: [string, string, string];
  public readonly test: number;

  public readonly successId: number;
  public readonly failureId: number;

  constructor(data: MonkeyDefinition) {
    this.id = Number(data[0].split(" ", 2)[1].slice(0, -1));
    this.items = data[1]
      .split(":")[1]
      .split(",")
      .map((s) => Number(s.trim()));
    this.operation = data[2].split("=")[1].trim().split(" ", 3) as [
      string,
      string,
      string
    ];
    this.test = Number(data[3].split("by")[1].trim());
    this.successId = Number(data[4].split("monkey")[1].trim());
    this.failureId = Number(data[5].split("monkey")[1].trim());
  }

  throwItem() {
    let item = this.items.shift();

    if (!item) {
      throw Error("No Item found");
    }

    item = this.inspectItem(item);
    item = Math.floor(item / 3);

    if (item % this.test === 0) {
      return [this.successId, item];
    }

    return [this.failureId, item];
  }

  inspectItem(value: number) {
    const [a, operand, b] = this.operation;

    const aNumber = a === "old" ? value : Number(a);
    const bNumber = b === "old" ? value : Number(b);

    switch (operand) {
      case "*":
        return aNumber * bNumber;
      case "+":
        return aNumber + bNumber;

      default:
        throw Error(`Invalid Operand: ${operand}`);
    }
  }

  doRound(monkeys: MonkeyList) {
    const inspections = this.items.length;

    for (let i = 0; i < inspections; i++) {
      const [monkey, value] = this.throwItem();
      monkeys[monkey].items.push(value);
    }

    return inspections;
  }
}
