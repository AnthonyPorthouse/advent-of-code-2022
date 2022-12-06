export function findFirstPacketMarkerIndex(input: string) {
  return findIndexAfterUniqueIdentifier(4, input)
}

export function findFirstMessageMarkerIndex(input: string) {
  return findIndexAfterUniqueIdentifier(14, input)
}

function findIndexAfterUniqueIdentifier(identifierLength: number, input: string) {
  const inputArray = input.split('')

  for (let from = 0; from < inputArray.length; from++) {
    const to = from + identifierLength

    const slice = new Set(inputArray.slice(from, to))

    if (slice.size === identifierLength) {
      return to
    }
  }

  return -1
}
