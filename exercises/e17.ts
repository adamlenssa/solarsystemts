export const minBy = <J, K>(array: J[], cb: (element: J | undefined) => K) => {
  let final = array[0];
  for (const element of array) {
    if (cb(element) < cb(final)) {
      final = element;
    }
  }
  return final;
};

export function maxBy<J, K>(array: J[], cb: (element: J | undefined) => K) {
  let final = array[0];
  for (const [index, element] of array.entries()) {
    if (index == 0) {
      final = element;
      continue;
    }
    if (cb(element) > cb(final)) {
      final = element;
    }
  }
  return final;
}
