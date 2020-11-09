import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import Document from "../../assets/images/document.png";
import styles from "./style";

export default function Home({ navigation }) {
  function goToCamera() {
    navigation.navigate("Camera");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={Document} resizeMode="cover" />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Realizar uma eficaz e rápida correção de cartões respostas baseado em
          suas imagens pegas na câmera, pode ser usado offline.
        </Text>
        <TouchableOpacity
          onPress={goToCamera}
          activeOpacity={0.8}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Acessar câmera</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
