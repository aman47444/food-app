import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.adv.component";
import { RestaurantInfoCardComponent } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  SafeArea,
  SearchContainer,
} from "./restraurant-screen.styles";
import { RestaurantsContext } from "./../../../services/restaurant/restaurants.context";
import { SearchComponent } from "../components/searchbar/search.component";

export const RestaurantScreen = () => {
  const { restauants, isLoading, error } = useContext(RestaurantsContext);
  const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;

  const LoadingComponent = () => (
    <ActivityIndicator
      animating={true}
      color={Colors.orange800}
      size={50}
      animating={true}
      style={{ marginLeft: -25 }}
    />
  );

  return (
    <SafeArea>
      {isLoading && (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <LoadingComponent />
        </View>
      )}
      <SearchComponent />
      <RestaurantList
        data={restauants}
        renderItem={({ item }) => {
          return (
            <Spacer variant="bottom" size="medium">
              <RestaurantInfoCardComponent restraurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeArea>
  );
};
