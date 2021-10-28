import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.adv.component";
import { Text } from "../../../../components/typogrophy/typogrophy.component";
import {
  Icon,
  RestaurantCardCover,
  RestaurantCard,
  Rating,
  Info,
  Address,
  Section,
  SectionEnd,
} from "./restraurant-info.styles";
import { FavoritesComponent } from "../../../../components/favorites/favorites.component";

export const RestaurantInfoCardComponent = ({ restaurant = {} }) => {
  const {
    name = "Sweegy",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "BHU Lanka Varanasi 221011",
    isOpenNow = true,
    rating = 4,
    isClosedTemporerly = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <FavoritesComponent restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporerly && (
              <Text variant="error">Temporerly Closed</Text>
            )}
            <Spacer position="left" size="medium">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
