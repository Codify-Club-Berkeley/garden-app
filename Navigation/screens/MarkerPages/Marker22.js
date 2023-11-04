import * as React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Marker from "../Marker";

Text.defaultProps = {};
Text.defaultProps.maxFontSizeMultiplier = 2.5;

const images = [
    require('../../images/Marker_22_1.jpg'),
    require('../../images/Marker_22_2.jpg'),
    require('../../images/Marker_22_3.jpg'),
    require('../../images/Marker_22_4.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        The plants in this central covered bed all need extra protection from the summer sun and winter cold.
        {"\n"} {"\n"}
        Many of these plants are from the <Text style={{fontWeight: "bold"}}> Crassulaceae family, 
        including <Text style={{fontStyle: "italic"}}>Aeonium, Echeveria, Crassula, </Text> 
        and <Text style={{fontStyle: "italic"}}>Sedum</Text>.</Text>
    </Text>
;

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '20'}}>
        Plants in the <Text style={{fontWeight: "bold"}}>Crassulaceae family have a unique adaptation for surviving heat and drought</Text>. 
        To reduce water loss, they exchange CO2 only at night. 
        CO2 is stored as malic acid until the sun comes up and the plant can complete their photosynthesis. 
    </Text> 

const map = require('../../images/map/22.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: '20' }}>About 30 feet ahead, find the tree to your right with green bark. At its base is Marker 23.</Text>


export default function MarkerScreen({ navigation }) {
  return (
    <Marker
      images={images}
      num={22}
      text={text}
      popUpText={popUpText}
      navigation={navigation}
      map={map}
      directions={directions}
    ></Marker>
  );
}
