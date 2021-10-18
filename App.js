import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { RestaurantScreen } from "./src/features/restraurants/screens/restraurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/locations.context";

const Tab = createBottomTabNavigator();
const TAB_ICONS = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

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
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurant" component={RestaurantScreen} />
                <Tab.Screen name="Map" component={SettingScreen} />
                <Tab.Screen name="Settings" component={MapScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusbar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
