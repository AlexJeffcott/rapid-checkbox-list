import { ReactElement, ChangeEventHandler } from "react";

export type Item = Array<(() => ReactElement) | string | undefined>;

export type CheckboxProps = {
  item: Item;
  name: string;
};

export type ListProps = { getList: () => Promise<Item[]>, handleFormChange: ChangeEventHandler<HTMLFormElement> }

export type MockA = { id: number; title: string };

export type MockB = { name: string; description: string; link?: string };
