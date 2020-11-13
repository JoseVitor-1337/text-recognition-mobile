import React, { useState } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import CardFeedback from './components/CardFeedback'

import styles from "./style";

import logo from "../../assets/images/logo.png";

import API from "../../services/api";

export default function Dashboard() {
  const [camera, setCamera] = useState(null);

  async function takePicture() {
    if (camera) {
      try {
        const picture = await camera.current.takePictureAsync();

        API.post("");

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

  const renderItem = ({ item }) => (
    <CardFeedback makeCorrections={makeCorrections} feedback={item} />
  );
  
  async function addNewFeedback() {}

  async function makeCorrections() {}

  return (
    <>
      <View style={styles.container} >
        <FlatList 
          data={data} 
          keyExtractor={item => item.id} 
          renderItem={renderItem}
        />
         
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={addNewFeedback}
        >
          <Text style={styles.buttonText}>Adicionar novo Gabarito</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
