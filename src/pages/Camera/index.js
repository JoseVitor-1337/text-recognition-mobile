import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./style";
import ComponentCamera from "../../components/Camera";

import API from "../../services/api";

export default function Camera() {
  const [camera, setCamera] = useState(null);

  async function takePicture() {
    if (camera) {
      try {
        const picture = await camera.current.takePictureAsync();

        API.post("");

        console.log(picture);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function showReconizationResult() {}

  return (
    <>
      <View style={styles.camera}>
        <ComponentCamera setCamera={setCamera} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cameraBox} onPress={takePicture}>
          <FontAwesome name="camera-retro" size={60} color="#536DFE" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={showReconizationResult}
        >
          <Text style={styles.buttonText}>Mostrar resultados parciais</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
