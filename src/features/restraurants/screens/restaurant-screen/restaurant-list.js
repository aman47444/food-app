import { FlatList } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "./../../../../infastructure/theme/colors";
import { theme } from "./../../../../infastructure/theme/index";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;
