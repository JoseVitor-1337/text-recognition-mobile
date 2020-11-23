import React from "react";


import CardFeedback from "./components/CardFeedback";
import NavigationHeader from '../../components/NavigationHeader'
import Button from "../../components/Button";

import { ListContainer, Container, ButtonRow } from "./style";

export default function FeedbackPreview({ route, navigation }) {
 
  const { feedbackId } = route.params  
  
  const data = {
    id: 1,
    description: "GABARITO OFICIAL FINAL",
    date: "10/12/2019",
  }
 
  function saveFeedback() {
    navigation.navigate("Dashboard")
  }

  function resetFeedback() {
    navigation.navigate("CreateFeedback")
  }

  console.log(data)

  return (
    <Container>  

      <NavigationHeader navigation={navigation} goTo="CreateFeedback" pageTitle="Dados do Gabarito" />
      
      <ListContainer>

        <CardFeedback feedback={data} />

        <ButtonRow>
          <Button
            backgroundColor="#00d600"
            color="#FFFFFF"
            activeOpacity={0.8}
            onPress={saveFeedback}
            text="Salvar Gabarito"
          />

        <Button
          backgroundColor="#db0f27"
          color="#FFFFFF"
          activeOpacity={0.8}
          onPress={resetFeedback}
          text="Cancelar"
        />
        </ButtonRow>
      
      </ListContainer>

    </Container>
  );
}
