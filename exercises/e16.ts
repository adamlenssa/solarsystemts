// see e16.md

import { Z } from "vitest/dist/types-71ccd11d";

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find(array: Array<Z>, callback: (element: Z) => boolean) {
  for (const element of array) {
    if (callback(element)) {
      return element;
    }
  }
}
