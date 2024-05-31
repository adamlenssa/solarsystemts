// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid, Counter } from "./types";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const counter: Counter[] = [];
  let largest: Counter = { year: 1000, occ: 0 };
  asteroids.map((asteroid) => {
    if (!counter.find((count) => count.year == asteroid.discoveryYear)) {
      counter.push({ year: asteroid.discoveryYear, occ: 1 });
      return;
    }
    for (const count of counter) {
      if (count.year == asteroid.discoveryYear) {
        count.occ = count.occ + 1;
      }
    }
  });
  counter.map((count) => {
    if (count.occ > largest.occ) {
      largest = count;
    }
  });
  return largest.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
