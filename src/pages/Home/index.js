import React from "react";

import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";

import Button from "../../components/Button";

import {
  Background,
  Image,
  ImageContainer,
  Title,
  TextContainer,
} from "./style";

export default function Home({ navigation }) {
  function goToDashboard() {
    navigation.navigate("Dashboard");
  }

  return (
    <Background source={background}>
      <ImageContainer>
        <Image source={logo} resizeMode="cover" />
      </ImageContainer>

      <TextContainer>
        <Title>
          Correção automática de cartões respostas de provas aplicadas em
          vertibulares e concursos.
        </Title>
        <Button
          onPress={goToDashboard}
          activeOpacity={0.8}
          text="Iniciar Sessão"
        />
      </TextContainer>
    </Background>
  );
}
