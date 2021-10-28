import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../services/locations/locations.context";
import { SearchContainer } from "./seachbar.style";

export const SearchComponent = ({ isFavouritesToggle, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [seachKeyword, setSeachKeyword] = useState(keyword);

  useEffect(() => {
    setSeachKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggle ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Seach for location"
        value={seachKeyword}
        onSubmitEditing={() => {
          search(seachKeyword);
        }}
        onChangeText={(text) => setSeachKeyword(text)}
      />
    </SearchContainer>
  );
};
