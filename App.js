import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { RestraurantScreen } from "./src/features/restraurants/screens/restraurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestraurantScreen />
      </ThemeProvider>
      <ExpoStatusbar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
