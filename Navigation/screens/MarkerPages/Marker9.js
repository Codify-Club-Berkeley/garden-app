import * as React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Marker from "../Marker";

Text.defaultProps = {};
Text.defaultProps.maxFontSizeMultiplier = 2.5;

const images = [
    require('../../images/Marker_9_1.jpg'),
    require('../../images/Marker_9_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        While this <Text style={{fontWeight: "bold"}}>Mexican grass tree (<Text style={{fontStyle: "italic"}}>Dasylirion longissimum</Text>) </Text>
        with its fountain-like form looks strikingly similar to the grass tree at tour stop 8, 
        it is a member of a different plant family from a different continent. 
    </Text>
;

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        When <Text style={{fontWeight: "bold"}}>similar traits arise independently in unrelated lineages, 
        this is known as convergent evolution.</Text>
        {"\n"} {"\n"}
        <Text style={{fontStyle: "italic"}}>What other examples of convergent evolution in nature can you think of?</Text>
    </Text> 

const map = require('../../images/map/9.jpg')

const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>
    Turn around towards the clearing. Head left on the path. 
    Marker 10 is on the left edge of the mounded bed with very exposed rocks. 
    </Text>
    {"\n"} {"\n"}
    <Text style={{ fontStyle: "italic" }}>
      What other examples of convergent evolution in nature can you think of?
    </Text>
;


export default function MarkerScreen({ navigation }) {
  return (
    <Marker
      images={images}
      num={9}
      text={text}
      popUpText={popUpText}
      navigation={navigation}
      map={map}
      directions={directions}
    ></Marker>
  );
}
