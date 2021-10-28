import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const FavoritesButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
  background-color: transparent;
`;

export const FavoritesComponent = ({ restaurant }) => {
  const { favorites, addToFavourites, removeFromFavourites } =
    useContext(FavoritesContext);
  const isFavrites = favorites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavoritesButton
      onPress={() =>
        !isFavrites
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavrites ? "heart" : "hearto"}
        size={24}
        color={isFavrites ? "red" : "white"}
      />
    </FavoritesButton>
  );
};
