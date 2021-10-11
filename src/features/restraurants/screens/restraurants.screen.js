import React from "react";
import { Searchbar } from "react-native-paper";
import { RestraurantInfoCardComponent } from "../components/restaurant-info-card.component";
import { SafeArea, RestraurantListContainer, SearchContainer  } from "./restraurant-screen.styles";

export const RestraurantScreen = () => {

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
