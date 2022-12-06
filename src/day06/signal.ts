
export function findFirstMarkerIndex(input: string) {

  const inputArray = input.split('')

  for (let from = 0; from < inputArray.length; from++) {
    const to = from + 4

    const slice = new Set(inputArray.slice(from, to))

    if (slice.size === 4) {
      return to
    }
  }

  return -1
}
