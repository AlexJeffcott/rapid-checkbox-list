import { FC, memo } from "react";
import styled from "@emotion/styled";
import type { CheckboxProps } from "../types";

const Label = styled.label(({ theme }) => ({
  fontFamily: theme.other.fontFamily.lato,
  fontSize: theme.sizes.fontSize.m,
  lineHeight: theme.sizes.fontSize.m,
  color: theme.colors.text.dark,
  margin: theme.sizes.spacing.zero,
  padding: theme.sizes.spacing.zero,
  marginTop: theme.sizes.spacing.m,
  display: "flex",
  userSelect: "none",
  cursor: "pointer"
}));

const InfoContainer = styled.div(({ theme }) => ({
  margin: theme.sizes.spacing.zero,
  padding: theme.sizes.spacing.zero,
  paddingLeft: theme.sizes.spacing.m
}));

const Input = styled.input(({ theme }) => ({
  border: theme.sizes.spacing.zero,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: theme.sizes.spacing.zero,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
  "& + div": {
    borderColor: theme.colors.secondary,
  },
  "& + div > svg": {
    visibility: "hidden",
  },
  "&:checked + div": {
    borderColor: theme.colors.primary,
  },
  "&:checked + div > svg": {
    visibility: "visible",
  },
  "&:focus + div": {
    boxShadow: `0 0 0 1px ${theme.colors.secondary}`
  }
 }));

const StyledCheckbox = styled.div(({ theme }) => ({
  display: "inline-block",
  width: theme.sizes.spacing.xl,
  height: theme.sizes.spacing.xl,
  marginTop: theme.sizes.spacing.xs,
  borderRadius: theme.sizes.spacing.xs,
  borderStyle: "solid",
  borderWidth: "1px",
  transition: "all 150ms",
  "& > svg": {
    fill: "none",
    stroke: theme.colors.primary,
    strokeWidth: "3px"
  }
}));

export const Checkbox: FC<CheckboxProps> = memo(({ item, handleCheckboxChange }) => (
  <Label>
    <Input
      id={item.id}
      checked={item.status}
      aria-checked={item.status}
      type="checkbox"
      role="checkbox"
      onChange={handleCheckboxChange}
    />
    <StyledCheckbox>
      <svg viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </StyledCheckbox>
    <InfoContainer>
      {item.infos.map((Info, i) =>
        !!Info ? (
          <div key={i}>{typeof Info !== "string" ? <Info /> : Info}</div>
        ) : null
      )}
    </InfoContainer>
  </Label>
), (p, n) => p.item.status === n.item.status)