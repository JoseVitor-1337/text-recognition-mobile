import React from "react";
import { Container } from "./style";
import { Text } from "react-native";

export default function FeedbackPreview({ route }) {
  const { feedbackId } = route 

  console.log(feedbackId)
  
  return (
    <Container>
      <Text>FeedbackPreview</Text>
    </Container>
  );
}
