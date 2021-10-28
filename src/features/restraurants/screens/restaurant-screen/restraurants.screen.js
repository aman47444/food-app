import React, { useContext, useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { Spacer } from "../../../../components/spacer/spacer.adv.component";
import { RestaurantInfoCardComponent } from "../../components/restaurant-info-card/restaurant-info-card.component";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "./restraurant-screen.styles";
import { RestaurantsContext } from "../../../../services/restaurant/restaurants.context";
import { SearchComponent } from "../../components/searchbar/search.component";
import { FavoritesContext } from "./../../../../services/favorites/favorites.context";
import { FavouritesBar } from "../../../../components/favorites/favourites-bar.component";

export const RestaurantScreen = ({ navigation }) => {
  const { restauants, isLoading, error } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggle, setIsToggle] = useState(false);
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
      <SearchComponent
        isFavouritesToggle={isToggle}
        onFavouritesToggle={() => setIsToggle(!isToggle)}
      />
      {isToggle && <FavouritesBar favorites={favorites} onNavigate={navigation.navigate} />}
      <RestaurantList
        data={restauants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer variant="bottom" size="medium">
                <RestaurantInfoCardComponent restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeArea>
  );
};
