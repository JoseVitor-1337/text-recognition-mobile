import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";
import styles from "./style";

export default function Home({ navigation }) {
  function goToCamera() {
    navigation.navigate("Dashboard");
  }




  return (
   
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.imageContainer}>
          <Image source={logo} resizeMode="cover" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Correção automática de cartões respostas de provas aplicadas em vertibulares e concursos.
          </Text>
          <TouchableOpacity
            onPress={goToCamera}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Iniciar Sessão
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
     
  );
}
