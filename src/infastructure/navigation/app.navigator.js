import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../utils/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { Text, Button } from "react-native";
import { MapScreen } from "./../../features/map/screen/map.screen";
import { AuthenticationContext } from "./../../services/authentication/auth.context";
import { LocationContextProvider } from "../../services/locations/locations.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { RestaurantsContextProvider } from "../../services/restaurant/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

export const AppNavigator = () => {
  const SettingScreen = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
      <SafeArea>
        <Text>Settings</Text>
        <Button title="logout" onPress={() => onLogout()} />
      </SafeArea>
    );
  };

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
              component={SettingScreen}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
