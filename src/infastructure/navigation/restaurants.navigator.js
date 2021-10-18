import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from '../../features/restraurants/screens/restaurant-screen/restraurants.screen';
import { RestaurantDetailsScreen } from "../../features/restraurants/screens/restaurant-details/restaurant-details.screen";


const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator  screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false
    }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};