import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingScreen } from "./../../features/settings/screens/settings.screen";
import { FavouriteScreen } from './../../features/settings/screens/favourite.screen';

const SettingStack = createStackNavigator();

export const SettingNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: false,
        CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingStack.Screen
        options={{
          header: () => null,
        }}
        name="Setting"
        component={SettingScreen}
      />
      <SettingStack.Screen
        name="Favourites"
        component={FavouriteScreen}
      />
    </SettingStack.Navigator>
  );
};
