// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name

import { Planet } from "./types";

//  must have destructured parameters
export function findPlanetByMoon({
  planets,
  moonName,
}: {
  planets: Planet[];
  moonName: string;
}) {
  return planets.find((planet) => {
    const boolean = planet.moons?.find(
      (moon) => moon.toLowerCase() == moonName.toLowerCase()
    );
    if (boolean) {
      return planet;
    }
  });
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
