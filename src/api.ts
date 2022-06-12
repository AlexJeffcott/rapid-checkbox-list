import { mockA, mockB } from "./__mocks__";
import type { Item, MockA, MockB } from "./types";

export const fetchItemsA = async (): Promise<MockA[]> => mockA;

export const fetchItemsB = async (): Promise<MockB[]> => mockB;


