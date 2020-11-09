import React, { useRef, useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

export default function CameraComponent({ setCamera }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const cameraRef = useRef(null);

  useEffect(() => {
    async function setCameraAcess() {
      const { status } = await Camera.requestPermissionsAsync();

      if (status === "granted") {
        setCamera(cameraRef);
        setHasPermission(status === "granted");
      }
    }

    setCameraAcess();
  }, [cameraRef]);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
        
        </View>
      </Camera>
    </View>
  );
}
