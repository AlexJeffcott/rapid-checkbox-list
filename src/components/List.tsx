import { useState, useEffect, FC, memo } from "react";
import { Checkbox, Card, CardTitle, CardBody } from "./";
import type { Item, ListProps } from "../types";
import styled from "@emotion/styled";

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

export const List: FC<ListProps> = memo(
  ({ getList, handleFormChange }) => {
    const [apiState, setApiState] = useState<"loading" | "success" | "failure">(
      "loading"
    );
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
      getList()
        .then((data) => {
          setTimeout(() => {
            setItems(data);
            setApiState("success");
          }, 500);
        })
        .catch((error: Error) => {
          setApiState("failure");
          console.error(error);
        });
    }, [getList]);

    return (
      <Card>
        <CardTitle>Super Special Checkbox list</CardTitle>
        <CardBody>
          {apiState === "loading" ? <div>loading...</div> : <></>}
          {apiState === "failure" ? <div>Something went wrong!</div> : <></>}
          {apiState === "success" ? (
            <form onChange={handleFormChange}>
              <ListHeader>Info</ListHeader>
              {items.map((item, i) => (
                <Checkbox key={i} name={i.toString()} item={item}></Checkbox>
              ))}
            </form>
          ) : (
            <></>
          )}
        </CardBody>
      </Card>
    );
  },
  (p, n) => true
);
