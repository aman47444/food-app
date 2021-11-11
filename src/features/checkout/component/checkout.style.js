import styled from "styled-components/native";
import { Avatar, TextInput, Button } from "react-native-paper";
import { colors } from "./../../../infastructure/theme/colors";

export const CartContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.ui.error};
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
align-self: center
width: 80%;
padding: ${(props) => props.theme.space[2]}
`;

export const ClearButton = styled(Button).attrs({
  color: colors.ui.error,
})`
align-self: center
width: 80%;
padding: ${(props) => props.theme.space[2]}
`;
