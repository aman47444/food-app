// This is the Basic of spacing

import React from "react";
import styled from "styled-components/native";

export const SpacerComponent = ({ varient }) => {
  const TopSmall = styled.View`
    margin-top: ${(props) => props.theme.space[1]};
  `;

  const TopMedium = styled.View`
    margin-top: ${(props) => props.theme.space[2]};
  `;

  const TopLarge = styled.View`
    margin-top: ${(props) => props.theme.space[3]};
  `;

  const LeftSmall = styled.View`
    margin-left: ${(props) => props.theme.space[1]};
  `;

  const LeftMedium = styled.View`
    margin-left: ${(props) => props.theme.space[2]};
  `;

  const LeftLarge = styled.View`
    margin-left: ${(props) => props.theme.space[3]};
  `;

  const RightSmall = styled.View`
    margin-right: ${(props) => props.theme.space[1]};
  `;

  const RightMedium = styled.View`
    margin-right: ${(props) => props.theme.space[2]};
  `;
  const RightLarge = styled.View`
    margin-right: ${(props) => props.theme.space[3]};
  `;

  if (varient === "top.small") return <TopSmall />;
  if (varient === "top.medium") return <TopMedium />;
  if (varient === "top.large") return <TopLarge />;
  if (varient === "left.small") return <LeftSmall />;
  if (varient === "left.medium") return <LeftMedium />;
  if (varient === "left.large") return <LeftLarge />;
  if (varient === "right.small") return <RightSmall />;
  if (varient === "right.medium") return <RightMedium />;
  if (varient === "right.large") return <RightLarge />;
};
