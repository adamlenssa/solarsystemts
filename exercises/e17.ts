export const minBy = <J, K>(array: J[], cb: (element: J) => K) => {
  if (array[0]) {
    let final: J = array[0];
    for (const element of array) {
      if (cb(element) < cb(final)) {
        final = element;
      }
    }
    return final;
  }
  return;
};

export function maxBy<J, K>(array: J[], cb: (element: J) => K) {
  if (array[0]) {
    let final: J = array[0];
    for (const element of array) {
      if (cb(element) > cb(final)) {
        final = element;
      }
    }
    return final;
  }
  return;
}
