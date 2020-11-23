import React from "react";
import { Dimensions, FlatList } from 'react-native'
import { Container, FlatListContainer }  from './style.js'
import NavigationHeader from '../../components/NavigationHeader'
import ParticipantCard from './components/ParticipantCard'

export default function Corrections({ navigation }) {
  
  const answerCard = [{
    name: "Jose Vitor de Melo Geronimo",
    cpf: "123-123-123.01",
    strangeLanguage: "Inglês",
    generalRecord: "3010123.32",
    course: "Ciências da computação",
    result: [
      {
        type: "Língua portuguesa",
        points: 8
      },
      {
        type: "Língua inglesa",
        points: 6
      },
      {
        type: "Matemática",
        points: 4
      },
      {
        type: "Biologia",
        points: 5
      },
      {
        type: "Quimica",
        points: 4
      },
      {
        type: "Sociologia",
        points: 5
      },
      {
        type: "Física",
        points: 6
      }]
  }]


  
  const renderItem = ({ item }) => (
    <ParticipantCard answerCardInfo={item} />
  );

  return (
    <Container> 
      <NavigationHeader navigation={navigation} goTo="MakeCorrection" pageTitle="Correções realizadas" />
      <FlatListContainer height={Dimensions.get("window").height }>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.cpf}
          horizontal={false}
          data={answerCard}
          renderItem={renderItem}
        />
   
      </FlatListContainer>
    
    </Container>
  );
}
