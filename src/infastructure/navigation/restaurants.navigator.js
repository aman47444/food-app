import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from '../../features/restraurants/screens/restaurant-screen/restraurants.screen';
import { RestaurantDetailsScreen } from "../../features/restraurants/screens/restaurant-details/restaurant-details.screen";


const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none" screenOptions={{
        ...TransitionPresets.ModalPresentationIOS
    }}>
      <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};