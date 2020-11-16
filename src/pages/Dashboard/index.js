import React, { useState } from "react";
import CardFeedback from "./components/CardFeedback";

import Button from "../../components/Button";

import { ListContainer, FlatListContainer, Footer } from "./style";

export default function Dashboard({ navigation }) {
  const data = [
    {
      id: 1,
      description: "GABARITO OFICIAL FINAL",
      date: "10/12/2019",
    },
    {
      id: 2,
      description: "GABARITO OFICIAL FINAL",
      date: "10/12/2018",
    },
    {
      id: 3,
      description: "GABARITO OFICIAL FINAL",
      date: "10/12/2017",
    },
  ];

  function goToAddNewFeedbackPage() {
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
      <ListContainer>
        <FlatListContainer
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </ListContainer>

      <Footer>
        <Button
          onPress={goToAddNewFeedbackPage}
          text="Adicionar novo Gabarito"
        />
      </Footer>
    </>
  );
}
