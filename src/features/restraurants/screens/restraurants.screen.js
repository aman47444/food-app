import React from "react";
styled
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.adv.component";
import { RestraurantInfoCardComponent } from "../components/restaurant-info-card.component";
import  styled  from 'styled-components/native';

import {
  SafeArea,
  RestraurantListContainer,
  SearchContainer,
} from "./restraurant-screen.styles";

export const RestraurantScreen = () => {

  const RestraurantList = styled(FlatList).attrs({
      contentContainerStyle: {
          padding: 16
      }
  })``;   
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestraurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
        ]}
        renderItem={() => (
          <>
            <Spacer variant="bottom" size="medium">
              <RestraurantInfoCardComponent />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
