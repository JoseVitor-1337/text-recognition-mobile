import React from "react";

import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";

import { Background, Image, ImageContainer, Button, Title, ButtonText, TextContainer } from "./style";

export default function Home({ navigation }) {
  function goToCamera() {
    navigation.navigate("Dashboard");
  }


  return (
   
      <Background source={background} >
        <ImageContainer>
          <Image source={logo} resizeMode="cover" />
        </ImageContainer>

        <TextContainer >
          <Title >
            Correção automática de cartões respostas de provas aplicadas em vertibulares e concursos.
          </Title>
          <Button
            onPress={goToCamera}
            activeOpacity={0.8}
          >
            <ButtonText >
              Iniciar Sessão
            </ButtonText>
          </Button>
        </TextContainer>
      </Background>
     
  );
}
