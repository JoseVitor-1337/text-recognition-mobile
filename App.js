import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes";
import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    console.log(fontsLoaded);
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Routes />
    </>
  );
}
