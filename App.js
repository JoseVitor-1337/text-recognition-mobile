import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Oh Hello There</Text>
      <StatusBar style="auto" />
    </View>
  );
}
