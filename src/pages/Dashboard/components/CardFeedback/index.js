import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";

import styles from "./style";

import logo from "../../../../assets/images/logo.png";

export default function CardFeedback({ feedback, makeCorrections}) {

  const feedbackAnswwer = [{
    title: "LÍNGUA PORTUGUESA",
    answers: [{
      number: 1,
      letter: "A"
    },
    {
      number: 2,
      letter: "A"
    },{
      number: 3,
      letter: "B"
    },{
      number: 4,
      letter: "C"
    },{
      number: 5,
      letter: "E"
    },{
      number: 6,
      letter: "E"
    },
    {
      number: 7,
      letter: "D"
    },{
      number: 8,
      letter: "B"
    },{
      number: 9,
      letter: "C"
    },]
  }]


  const renderItem = ({ item }) => (
    <View style={styles.feedbackContainer}>
      <Text style={styles.title}>{item.title}</Text>
      {item.answers.map(alternative => (
        <View style={styles.table}>
          <Text style={styles.tableText}>{alternative.number}</Text>
          <Text style={styles.tableText}>{alternative.letter}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image style={styles.image} source={logo} resizeMode="contain" />
        <View>
          <Text style={styles.title}>{feedback.description}</Text>
          <Text style={styles.date}>{feedback.date}</Text>
        </View>
      </View>

      

      <View style={styles.feedback}>
        <FlatList 
          style={styles.feedbackAnswer} 
          horizontal={true} 
          data={feedbackAnswwer} keyExtractor={item => item.id} 
          renderItem={renderItem} 
        />
      </View>

      <TouchableOpacity
        onPress={makeCorrections}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Realizar correções
        </Text>
      </TouchableOpacity>
    </View>
  );
}
