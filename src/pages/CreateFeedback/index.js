import React, { useState } from "react";
import Camera from "../../components/Camera";
import {
  CameraIcon,
  Container,
  Body,
  Header,
  Footer,
  Link,
  ArrowLeftIcon,
} from "./style.js";

import Button from "../../components/Button";

export default function CreateFeeback({ navigation }) {
  const [camera, setCamera] = useState(null);

  async function takePicture() {
    if (camera) {
      try {
        const picture = await camera.current.takePictureAsync();

        console.log(picture);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function goBack() {
    navigation.navigate("Dashboard");
  }

  function goToFeedbackPreview() {
    navigation.navigate("FeedbackPreview");
  }

  return (
    <Container>
      <Header>
        <ArrowLeftIcon
          onPress={goBack}
          name="arrow-left-circle"
          size={32}
          color="rgba(0, 0, 0, 0.85)"
        />

        <Link>Criação de um Gabarito</Link>
      </Header>
      <Body>
        <Camera setCamera={setCamera} />
      </Body>
      <Footer>
        <CameraIcon
          onPress={takePicture}
          name="camera"
          size={85}
          color="rgba(0, 0, 0, 0.85)"
        />
        <Button
          onPress={goToFeedbackPreview}
          text="Mostrar resultados parciais"
        />
      </Footer>
    </Container>
  );
}
