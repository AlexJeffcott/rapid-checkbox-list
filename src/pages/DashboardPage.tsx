import React, { useState, ChangeEvent } from "react";
import { Layout, List } from "../components";
import { H2 } from "../components";
import { fetchItemsA, fetchItemsB } from "../api";
import type { Item, MockA, MockB } from "../types";

const getNormalisedMockListA = async () =>
  fetchItemsA().then((data: MockA[]): Item[] =>
    data.map((d) => ([d.title]))
  );

const getNormalisedMockListB = async () =>
  fetchItemsB().then((data: MockB[]): Item[] =>
    data.map((d) => ([d.name, d.description, d.link]))
  );

export const DashboardPage = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleFormChange = (event: ChangeEvent<HTMLFormElement>) => {
    const inputElements = Array.from(event.target.form) as HTMLInputElement[]
    const checkedInputs = inputElements.map((input: HTMLInputElement) => input.checked ? input.name : '').filter(Boolean)
    setCheckedItems(checkedInputs)
  }

  return (
    <Layout>
      <H2>
        Selected indexes:{" "}
        {checkedItems.join(", ") || "none"}
      </H2>
      <List getList={getNormalisedMockListB} handleFormChange={handleFormChange}></List>
    </Layout>
  );
}
