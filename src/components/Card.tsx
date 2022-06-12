import styled from "@emotion/styled";

export const Card = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "40rem",
  backgroundColor: theme.colors.primary,
  borderRadius: theme.sizes.borderRadius.s
}));

export const CardTitle = styled.h2(({ theme }) => ({
  fontFamily: theme.other.fontFamily.lato,
  fontSize: theme.sizes.fontSize.m,
  margin: theme.sizes.spacing.zero,
  padding: theme.sizes.spacing.zero,
  width: "100%",
  textAlign: "center",
  color: theme.colors.text.white,
  height: "4rem",
  lineHeight: "4rem"
}));

export const CardBody = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.surface,
  padding: theme.sizes.spacing.m,
  borderRadius: `0 0 ${theme.sizes.borderRadius.s} ${theme.sizes.borderRadius.s}`
}));
