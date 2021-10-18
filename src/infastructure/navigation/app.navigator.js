import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../utils/safe-area.component";
import { RestaurantsNavigator } from './restaurants.navigator';
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

export const AppNavigator = () => {

  const SettingScreen = () => (
    <SafeArea>
      <Text>This is Setting Screen</Text>
    </SafeArea>
  );
  const MapScreen = () => (
    <SafeArea>
      <Text>This is Map Screen</Text>
    </SafeArea>
  );

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICONS[route.name];
    return {
      tabBarIcon: ({ size, color }) => {
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen options={{headerShown: false}} name="Restaurant" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={SettingScreen} />
        <Tab.Screen name="Settings" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
