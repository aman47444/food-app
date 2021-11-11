import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.adv.component";
import { CartContext } from "../../../services/cart/cart.context";
import { SafeArea } from "../../../utils/safe-area.component";
import {
  CartContainer,
  CartIcon,
  ClearButton,
  NameInput,
  PayButton,
} from "../component/checkout.style";
import { CreditCartComponent } from "../component/credit-cart.component";
import { Text } from "./../../../components/typogrophy/typogrophy.component";
import { RestaurantInfoCardComponent } from "./../../restraurants/components/restaurant-info-card/restaurant-info-card.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartContainer>
          <CartIcon icon="cart-off" />
          <Text>Your Cart is Empty</Text>
        </CartContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCardComponent restaurant={restaurant} />
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total {sum / 100}</Text>
        </Spacer>
        <NameInput label="Name" value={name} onChangeText={(t) => setName(t)} />
        <Spacer position="top" size="large">
          {name.length > 0 && <CreditCartComponent />}
        </Spacer>
        <Spacer position="top" size="large">
          <PayButton mode="contained" icon="cash-usd" onPress={() => {
              console.log("pay Now")
          }}>Pay</PayButton>
        </Spacer>
        <Spacer position="top" size="large">
          <ClearButton mode="contained" icon="cart-off" onPress={() => clearCart()}>Clear Cart</ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
