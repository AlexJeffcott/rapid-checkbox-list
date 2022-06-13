import { useState, useEffect, FC, memo, ChangeEvent } from "react";
import { Checkbox, Card, CardTitle, CardBody } from "./";
import type { Item, ListProps } from "../types";
import styled from "@emotion/styled";
import {useListReducer} from './ListState'

const ListHeader = styled.div(({ theme }) => ({
  fontFamily: theme.other.fontFamily.lato,
  fontSize: theme.sizes.fontSize.m,
  color: theme.colors.primary,
  fontWeight: 700,
  margin: theme.sizes.spacing.zero,
  padding: theme.sizes.spacing.zero,
  position: "relative",
  left: "38px"
}));

export const List: FC<ListProps> = ({ getList }) => {
  const [apiState, setApiState] = useState<"loading" | "success" | "failure">(
    "loading"
  );
  const [{ items }, { addItems, updateItemStatus }] = useListReducer();

  useEffect(() => {
    getList()
      .then((data) => {
        setTimeout(() => {
          addItems(data);
          setApiState("success");
        }, 500);
      })
      .catch((error: Error) => {
        setApiState("failure");
        console.error(error);
      });
  }, [getList]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateItemStatus(event.currentTarget.name as `${number}`, event.currentTarget.checked)
  }

  return (
    <Card>
      <CardTitle>Super Special Checkbox list</CardTitle>
      <CardBody>
        {apiState === "loading" ? <div>loading...</div> : <></>}
        {apiState === "failure" ? <div>Something went wrong!</div> : <></>}
        {apiState === "success" ? (
          <>
            <ListHeader>Info</ListHeader>
            {items.map((item, i) => (
              <Checkbox key={i} item={item} handleCheckboxChange={handleCheckboxChange}></Checkbox>
            ))}
          </>
        ) : (
          <></>
        )}
      </CardBody>
    </Card>
  );
};
