import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import logo from "../../../../assets/images/logo.png";

import Button from "../../../../components/Button";

import {
  Card,
  Header,
  Image,
  Title,
  TableContainer,
  Text,
  FlatListView,
  TableTextNumber,
  Table,
  LetterDiv,
  NumberDiv,
  TableText,
  FeedbackContainer,
} from "./style";

export default function CardFeedback({ feedback, goMakeCorrections }) {
  const feedbackAnswwer = [
    {
      title: "LÍNGUA PORTUGUESA",
      answers: [
        {
          number: "1",
          letter: "A",
        },
        {
          number: "2",
          letter: "A",
        },
        {
          number: "3",
          letter: "B",
        },
        {
          number: "4",
          letter: "C",
        },
        {
          number: "5",
          letter: "E",
        },
        {
          number: "6",
          letter: "E",
        },
        {
          number: "7",
          letter: "D",
        },
        {
          number: "8",
          letter: "B",
        },
        {
          number: "9",
          letter: "C",
        },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <FeedbackContainer>
      <Title>{item.title}</Title>
      <TableContainer>
        {item.answers.map((alternative) => (
          <Table key={alternative.number}>
            <NumberDiv>
              <TableTextNumber>{alternative.number}</TableTextNumber>
            </NumberDiv>
            <LetterDiv>
              <TableText>{alternative.letter}</TableText>
            </LetterDiv>
          </Table>
        ))}
      </TableContainer>
    </FeedbackContainer>
  );

  return (
    <Card width={Dimensions.get("window").width}>
      <Header>
        <Image source={logo} resizeMode="contain" />
        <View>
          <Text>{feedback.description}</Text>
          <Text>{`Data: ${feedback.date}`}</Text>
        </View>
      </Header>

      <FlatListView>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={false}
          keyExtractor={(item) => item.title}
          data={feedbackAnswwer}
          renderItem={renderItem}
        />
      </FlatListView>

      <Button
        color="#FFFFFF"
        backgroundColor="#536dfe"
        onPress={goMakeCorrections}
        activeOpacity={0.8}
        text="Realizar correções"
      />
    </Card>
  );
}
