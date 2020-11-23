import React from "react";
import { FlatList } from 'react-native'
import Button from '../../../../components/Button'
import {  Row, TextView, Paragraph, Title, Header, FlatListContainer, MiniTitle, Content, Note, Box, Circle, LanguageRow, Discipline }  from './style.js'

export default function ParticipantCard({ answerCardInfo, navigation }) {
  
   
  const renderItem = ({ item }) => (
    <LanguageRow>
      <Box>
        <Discipline>{item.type}</Discipline>
      </Box>
    
      <Box>
        <Circle>
          <Note>{item.points}</Note>
        </Circle>
      </Box>
    </LanguageRow>
  );

  function saveAnswerCardResult() {
    navigation.navigate("Corrections")
  }

  function resetAnswerCardCreation() {
    navigation.navigate("MakeCorrection")
  }

  return (
    <Content>
      <Header>
        <Title>Correção Parcial</Title>
        <Button
          backgroundColor="#db0f27"
          color="#FFFFFF"
          activeOpacity={0.8}
          onPress={resetAnswerCardCreation}
          text="Cancelar"
        />
      </Header>
      

      <Row>
        <TextView>
          <Paragraph>Nome: {answerCardInfo.name}</Paragraph>
        </TextView>
        <TextView>
          <Paragraph>Lingua estrangeira: {answerCardInfo.strangeLanguage}</Paragraph>
        </TextView>
      </Row>
      <Row>
        <TextView>
          <Paragraph>RG: {answerCardInfo.generalRecord}</Paragraph>
        </TextView>
        <TextView>
          <Paragraph>CPF: {answerCardInfo.cpf}</Paragraph>
        </TextView>
      </Row>
      <Row>
        <TextView width="100%">
          <MiniTitle>Curso: {answerCardInfo.course}</MiniTitle>
        </TextView>
      </Row>

      <FlatListContainer>
        <FlatList
          keyExtractor={(item) => item.type}
          data={answerCardInfo.result}
          renderItem={renderItem}
        />
      </FlatListContainer>

                  
      <Button
        backgroundColor="#00d600"
        color="#FFFFFF"
        activeOpacity={0.8}
        onPress={saveAnswerCardResult}
        text="Salvar resultado da correção"
      />
    </Content>
  );
}
