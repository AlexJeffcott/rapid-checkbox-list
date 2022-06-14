import React, { useState, ChangeEvent } from "react";
import { Layout, List } from "../components";
import { H2 } from "../components";
import { fetchItemsA, fetchItemsB } from "../api";
import type { Item, MockA, MockB } from "../types";
import {useListReducer} from '../components/ListState'

const getNormalisedMockListA = async () =>
  fetchItemsA().then((data: MockA[]): Item[] =>
    data.map((d, i) => ({id: `${i}`, status: false, infos: [d.title]}))
  );

const getNormalisedMockListB = async () =>
  fetchItemsB().then((data: MockB[]): Item[] =>
    data.map((d, i) => ({id: `${i}`, status: false, infos: [d.name, d.description, d.link]}))
  );

export const DashboardPage = () => {
  const [{ items }] = useListReducer();

  return (
    <Layout>
      <H2>
        Selected indexes:{" "}
        {items.map((item: Item) => item.status ? item.id : '').filter(Boolean).join(", ") || "none"}
      </H2>
      <List getList={getNormalisedMockListB}></List>
    </Layout>
  );
}
