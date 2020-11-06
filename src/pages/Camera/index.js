import React from "react";
import { View } from "react-native";
import styles from "./style";
import ComponentCamera from "../../components/Camera";

export default function Camera({ navigation }) {
  function goToHome() {
    navigation.navigate("Home");
  }
  return (
    <>
      <View style={styles.camera}>
        <ComponentCamera />
      </View>
      <View style={styles.footer}></View>
    </>
  );
}
