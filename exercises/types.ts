export type MassData = {
  // something
  planets: Planet[];
  asteroids: Asteroid[];
};

export type VolData = {
  // something
};

export type Planet = {
  // something
  id: string;
  name: string;
  isPlanet: boolean;
  mass: { massValue: number; massExponent: number };
  vol: { volValue: number; volExponent: number };
  gravity: number;
  avgTemp: number;
  moonsCount: number | null;
  moons: string[] | null;
};

export type Asteroid = {
  // something
  name: string;
  discoveryYear: number;
  orbitalPeriod: number;
};

export type AllData = {
  // something
};
