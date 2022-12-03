const items = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function getItemScore(item: string) {
  return items.indexOf(item) + 1;
}
