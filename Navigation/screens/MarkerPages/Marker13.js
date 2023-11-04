import * as React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Marker from "../Marker";

Text.defaultProps = {};
Text.defaultProps.maxFontSizeMultiplier = 2.5;

const images = [
    require('../../images/Marker_13_1.jpg'),
    require('../../images/Marker_13_2.jpg'),
    require('../../images/Marker_13_3.jpg'),
    require('../../images/Marker_13_4.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
       The <Text style={{fontWeight: "bold"}}>spiky, green clump in the foreground are dykias</Text>. 
       These plants are characterized by sharply hooked spines edging their stiff leaves.
       {"\n"} {"\n"}
       On the other side of the path you will see more rosettes; this time the smooth leafed <Text style={{fontWeight: "bold"}}> 
       hybrid of <Text style={{fontStyle: "italic"}}>Agave</Text> and <Text style={{fontStyle: "italic"}}>Manfreda</Text>, 
       known as <Text style={{fontStyle: "italic"}}>Mangave</Text>.</Text>
    </Text>
;

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        Dykias vary in color by species and can include green, silver, and purple. 
        Mangaves also have unique coloring, including combinations of red, brown, white, and purple.    
    </Text> 

const map = require('../../images/map/13.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>A few yards ahead, at the base of the palm tree, is Marker 14. </Text>


export default function MarkerScreen({ navigation }) {
  return (
    <Marker
      images={images}
      num={13}
      text={text}
      popUpText={popUpText}
      navigation={navigation}
      map={map}
      directions={directions}
    ></Marker>
  );
}
