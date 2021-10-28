import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "./../../features/map/screen/map.screen";
import { LocationContextProvider } from "../../services/locations/locations.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { RestaurantsContextProvider } from "../../services/restaurant/restaurants.context";
import { SettingNavigator } from "./setting.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

export const AppNavigator = () => {
  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICONS[route.name];
    return {
      tabBarIcon: ({ size, color }) => {
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    };
  };

  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
              options={{ headerShown: false }}
              name="Restaurant"
              component={RestaurantsNavigator}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Map"
              component={MapScreen}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Settings"
              component={SettingNavigator}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
