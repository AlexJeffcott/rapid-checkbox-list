import styled from "@emotion/styled";

export const Layout = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.sizes.spacing.s,
  "& > *": {
    marginTop: theme.sizes.spacing.m
  },
  "& > :first-child": {
    marginTop: theme.sizes.spacing.zero
  },
  "@media (min-width: 500px)": {
    marginTop: theme.sizes.spacing.xl
  }
}));
