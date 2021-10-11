import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Cover } from "react-native-paper";
import styled from "styled-components/native";

export const RestraurantInfoCardComponent = ({ restraurant = {} }) => {
  const Title = styled(Text)`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.body};
  `;

  const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.caption};
  `;

  const RestraurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.ui.quaternary};
  `;

  const RestraurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: white;
  `;

  const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
  `;

  const {
    name = "Sweegy",
    icon,
    photo = [
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/rodrick14c9291.jpg",
    ],
    address = "BHU Lanka Varanasi 221011",
    openingHours = true,
    rating = 4,
    isClosedTemporerly,
  } = restraurant;

  return (
    <RestraurantCard elevation={5}>
      <RestraurantCardCover key={name} source={{ uri: photo[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestraurantCard>
  );
};
