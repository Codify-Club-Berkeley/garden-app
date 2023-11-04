import * as React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Marker from "../Marker";

Text.defaultProps = {};
Text.defaultProps.maxFontSizeMultiplier = 2.5;

const images = [
<<<<<<< Updated upstream
    require('../../images/Marker_3_1.jpg'),
    require('../../images/Marker_3_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        <Text style={{fontStyle: "italic"}}>When you think of the word “succulent,” what comes to mind?</Text>
        {"\n"} {"\n"}
        Probably not a tall, stout-trunked specimen like this <Text style={{fontWeight: "bold"}}>Chilean wine palm (<Text style={{fontStyle: "italic"}}>Jubaea chilensis</Text>).</Text>
        {"\n"} {"\n"}
        <Text style={{fontWeight: "bold"}}>A succulent, by definition, is any plant that stores water.</Text>
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        This palm stores water in its trunk. The liquid inside can be harvested to make a type of wine.  
        {"\n"} {"\n"}
        This ability to store water is another <Text style={{fontWeight: "bold"}}>important adaptation</Text> of plants living in arid climates.
    </Text> 

const map = require('../../images/map/3.jpg')

const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>
    Continue on the main path, find Marker 4 at the intersection with the small path on your right.
=======
  require("../../images/Marker_3_1.jpg"),
  require("../../images/Marker_3_2.jpg"),
];
const text = (
  <Text
    style={{
      padding: 20,
      paddingBottom: 37,
      fontFamily: "Times New Roman",
      fontSize: 20,
    }}
  >
    <Text style={{ fontStyle: "italic" }}>
      When you think of the word “succulent,” what comes to mind?
    </Text>
    {"\n"} {"\n"}
    Probably not a tall, stout-trunked specimen like this{" "}
    <Text style={{ fontWeight: "bold" }}>
      Chilean wine palm (
      <Text style={{ fontStyle: "italic" }}>Jubaea chilensis</Text>).
>>>>>>> Stashed changes
    </Text>
    {"\n"} {"\n"}
    <Text style={{ fontWeight: "bold" }}>
      A succulent, by definition, is any plant that stores water.
    </Text>
  </Text>
);

const popUpText = (
  <Text style={{ padding: 15, fontFamily: "Times New Roman", fontSize: "20" }}>
    This palm stores water in its trunk. The liquid inside can be harvested to
    make a type of wine.
    {"\n"} {"\n"}
    This ability to store water is another{" "}
    <Text style={{ fontWeight: "bold" }}>important adaptation</Text> of plants
    living in arid climates.
  </Text>
);

const map = require("../../images/map/3.jpg");

const directions = (
  <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: "20" }}>
    Continue on the main path, find Marker 4 at the intersection with the small
    path on your right.
  </Text>
);

export default function MarkerScreen({ navigation }) {
  return (
    <Marker
      images={images}
      num={3}
      text={text}
      popUpText={popUpText}
      navigation={navigation}
      map={map}
      directions={directions}
    ></Marker>
  );
}
