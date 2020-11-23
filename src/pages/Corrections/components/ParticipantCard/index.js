import React from "react";
import { FlatList } from 'react-native'
import {  Row, TextView, Paragraph, Title, FlatListContainer, MiniTitle, Content, Note, Box, Circle, LanguageRow, Discipline }  from './style.js'

export default function ParticipantCard({ answerCardInfo }) {
  
   
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


  return (
    <Content>
      <Title>Correções feitas</Title>
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
     
    </Content>
  );
}
