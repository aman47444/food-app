import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestraurantInfoCardComponent } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

export const RestraurantScreen = () => {
  const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
  `;

  const RestraurantListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
  `;

  const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top:  ${StatusBar.currentHeight}px`};
  `;

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestraurantListContainer>
        <RestraurantInfoCardComponent />
      </RestraurantListContainer>
    </SafeArea>
  );
};
