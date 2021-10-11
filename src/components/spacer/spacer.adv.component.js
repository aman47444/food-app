// This is more optimize or advance code for space
import React from "react";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

// position does not support in Android that is why we used here react component
const SpacerView = styled.View`
  ${({ varient }) => varient};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const varient = getVariant(position, size, theme);
  return <SpacerView varient={varient}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
