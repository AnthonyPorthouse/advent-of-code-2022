export class Range {
  private readonly min: number;
  private readonly max: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  public getMin() {
    return this.min;
  }

  public getMax() {
    return this.max;
  }

  public containsRange(other: Range) {
    return this.getMin() <= other.getMin() && this.getMax() >= other.getMax();
  }

  public overlapsRange(other: Range) {
    return (
      (this.getMin() <= other.getMin() && this.getMax() >= other.getMin()) ||
      (this.getMin() <= other.getMax() && this.getMax() >= other.getMax())
    );
  }

  public toString() {
    return `${this.getMin()}-${this.getMax()}`;
  }
}
