import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.adv.component";

const FavourBarWraaper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) return null;
  return (
    <FavourBarWraaper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((item) => {
          const key = item.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavourBarWraaper>
  );
};
