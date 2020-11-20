import React, { useState } from "react";
import Camera from "../../components/Camera";
import Loading from "../../components/Loading";
import { Feather } from "@expo/vector-icons";

import NavigationHeader from '../../components/NavigationHeader'

import {
  CameraIconBox,
  Container,
  Body,
  Footer,
} from "./style.js";

import Button from "../../components/Button";

export default function CreateFeeback({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [ loading, setLoading ] = useState(false)

  async function takePicture() {
    if (camera) {
      setLoading(true)
      try {
        const picture = await camera.current.takePictureAsync();

        console.log(picture);
      } catch (error) {
        console.error(error);
      }
      setLoading(false)
    }
  }


  function goToFeedbackPreview() {
    navigation.navigate("FeedbackPreview", {
      feedbackId: 1
    });
  }


  return (
    <Container>
      <NavigationHeader navigation={navigation} goTo="Dashboard" pageTitle="Criação do gabarito" />
      <Body>
        {loading ? (
          <Loading loading={loading} text="Carregando imagem..." />
        ) : ( 
          <Camera setCamera={setCamera} />
        )}
      </Body>
      <Footer>
        <CameraIconBox onPress={takePicture} activeOpacity={0.8}>
          <Feather
            name="camera"
            size={65}
            color="#536dfe"
          />
        </CameraIconBox>
        <Button
          onPress={goToFeedbackPreview}
          text="Mostrar resultados parciais"
        />
      </Footer>
    </Container>
  );
}
