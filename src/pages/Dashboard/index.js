import React, { useState } from "react";
import CardFeedback from './components/CardFeedback'

import { ListContainer, FlatListContainer, Footer,  Button, ButtonText } from "./style";

import logo from "../../assets/images/logo.png";

import API from "../../services/api";

export default function Dashboard({ navigation }) {
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

      
  const data = [
    {
      id: 1,
      description: "GABARITO OFICIAL FINAL",
      date: '10/12/2019',
    },
    {
      id: 2,
      description: "GABARITO OFICIAL FINAL",
      date: '10/12/2018',
    },
    {
      id: 3,
      description: "GABARITO OFICIAL FINAL",
      date: '10/12/2017',
    },
  ];

  function addNewFeedback() {
    navigation.navigate("CreateFeedback");  
  }

  
  function goMakeCorrections() {
    navigation.navigate("Corrections"); 
  }

  const renderItem = ({ item }) => (
    <CardFeedback goMakeCorrections={goMakeCorrections} feedback={item} />
  );
  

  return (
    <>
      <ListContainer  >
        <FlatListContainer 
          data={data} 
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item.id} 
          renderItem={renderItem}
        />
      </ListContainer>
      
      <Footer>
        <Button onPress={addNewFeedback}>
          <ButtonText>Adicionar novo Gabarito</ButtonText>
        </Button>
      </Footer>
    </>
  );
}
