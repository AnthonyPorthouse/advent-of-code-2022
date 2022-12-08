export type NumericGrid = number[][]

export function inputToNumericGrid(input: string[], separator: string = ''): NumericGrid {
  return input.map((row) => row.split(separator).map(Number))
}
