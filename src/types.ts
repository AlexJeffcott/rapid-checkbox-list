import { ReactElement, ChangeEventHandler, ChangeEvent } from "react";

export type CheckboxProps = {
  item: Item;
  handleCheckboxChange: ChangeEventHandler<HTMLInputElement>
};

export type ListProps = { getList: () => Promise<Item[]> }

export type MockA = { id: number; title: string };

export type MockB = { name: string; description: string; link?: string };

export type Item = {
    id: `${number}`;
    infos: Array<(() => ReactElement) | string | undefined>;
    status: boolean;
  };
  
  export type Items = Item[];
  
  export type State = {
    items: Items;
  };
  
  export type Actions =
    | { type: "addItems"; items: Item[] }
    | { type: "updateItemStatus"; itemId: Item["id"], newStatus: Item["status"] }
  
  export type ActionHandlers = {
    addItems: (items: Item[]) => void;
    updateItemStatus: (itemId: Item["id"], newStatus: boolean) => void;
  };
  
  export type ContextType = [State, ActionHandlers];
  
  export type ProviderType = {
    children: React.ReactNode;
  };
  
  export type ItemProps = {
    id: Item["id"]
    infos: Item["infos"]
    status: boolean
    handleIpdateItemStatus: (event: ChangeEvent<HTMLInputElement>) => void
  };
  
  