import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import HeaderLogo from "../../assets/images/header-logo.png";
import styles from "./style";

export default function Home({ navigation }) {
  function goToCamera() {
    navigation.navigate("Camera");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={HeaderLogo} resizeMode="cover" />
      </View>

      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={goToCamera}
          activeOpacity={0.8}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Acessar câmera para salvar padrões do Gabarito
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
