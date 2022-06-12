import styled from "@emotion/styled";

export const H2 = styled.h2(({ theme }) => ({
  fontFamily: theme.other.fontFamily.lato,
  color: theme.colors.text.dark,
  fontSize: theme.sizes.fontSize.m,
  margin: theme.sizes.spacing.zero,
  padding: theme.sizes.spacing.zero
}));
