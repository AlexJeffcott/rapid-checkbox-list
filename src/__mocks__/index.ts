import type { MockA, MockB } from "../types";

const getRandIntInclusive = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const mockA: MockA[] = Array(1000)
  .fill(null)
  .map((el, i) => ({ id: i + 1, title: `Title ${i + 1}` }));

export const mockB: MockB[] = Array(1000)
  .fill(null)
  .map((el, i) => {
    if (getRandIntInclusive(0, 5) === 3)
      return {
        name: `Name ${i + 1}`,
        description: `Description ${i + 1}`,
        link: "google.com"
      };
    return { name: `Name ${i + 1}`, description: `Description ${i + 1}` };
  });
