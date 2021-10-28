import React, { useContext } from "react";
import { Text } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantList } from "./../../restraurants/screens/restaurant-screen/restaurant-list";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.adv.component";
import { RestaurantInfoCardComponent } from "./../../restraurants/components/restaurant-info-card/restaurant-info-card.component";

export const FavouriteScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
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
  ) : (
    <SafeArea style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>No Favourites Found</Text>
    </SafeArea>
  );
};
