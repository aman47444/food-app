import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../utils/safe-area.component";
import { RestaurantsNavigator } from './restaurants.navigator';
import { Text } from "react-native";
import { MapScreen } from './../../features/map/screen/map.screen';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

export const AppNavigator = () => {

  const SettingScreen = () => (
    <SafeArea>
      <Text>This is Setting Screen</Text>
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
        <Tab.Screen options={{headerShown: false}} name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen  options={{headerShown: false}} name="Map" component={MapScreen} />
        <Tab.Screen  options={{headerShown: false}} name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
