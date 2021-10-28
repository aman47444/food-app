import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infastructure/navigation";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/auth.context";

const firebaseConfig = {
  apiKey: "AIzaSyCVBEuBOOBVMm1zC8hZomFads2aBHXpJM8",
  authDomain: "foodapp-fc3c3.firebaseapp.com",
  projectId: "foodapp-fc3c3",
  storageBucket: "foodapp-fc3c3.appspot.com",
  messagingSenderId: "1053965717981",
  appId: "1:1053965717981:web:3ca594da990c75c705e634",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusbar style="auto" />
    </>
  );
}
