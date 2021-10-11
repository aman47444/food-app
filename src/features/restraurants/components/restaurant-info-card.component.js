import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.adv.component";
import { Text } from "./../../../components/typogrophy/typogrophy.component";
import {
  Icon,
  RestraurantCardCover,
  RestraurantCard,
  Rating,
  Info,
  Address,
  Section,
  SectionEnd,
} from "./restraurant-info.styles";

export const RestraurantInfoCardComponent = ({ restraurant = {} }) => {
  const {
    name = "Sweegy",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photo = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "BHU Lanka Varanasi 221011",
    isOpenNow = true,
    rating = 4,
    isClosedTemporerly = true,
  } = restraurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestraurantCard elevation={5}>
      <RestraurantCardCover key={name} source={{ uri: photo[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((ele, idx) => (
              <SvgXml key={idx} xml={star} width={20} height={20} />
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
    </RestraurantCard>
  );
};
