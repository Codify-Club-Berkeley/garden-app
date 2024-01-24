import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.

const images = [
    require('../../images/New_Marker_1_1.jpg'),
    require('../../images/Marker_1_1.jpg')
]

const styles = {
    text: {
        fontWeight: "bold", 
        fontStyle: "italic", 
        fontSize: 20
    }
}

const text = 
    <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>   
        This enormous plant is an <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Agave franzosinii</Text>. 
        Agaves are distinguished by their clusters of tough leaves, often with a spiny edges terminating in a sharp point. 
        Be on the lookout for Agaves in various shapes and sizes as you walk the Garden.
        {"\n"} {"\n"}
        Standing in front of the marker, look up and to the right to see the 
        <Text style={{fontWeight: "bold"}}> 250-year-old Valley Oak (<Text style={{fontStyle: "italic"}}>Quercus lobata</Text>)</Text>.
    </Text>

const popUpText = 
<Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20 }}>
    The oak is a reminder that <Text style={{ fontWeight: "bold" }}> 
    this landscape was once oak woodland, the land of the Bay Miwoks.</Text>
</Text>

// const text = 
//     <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>   
//         This <Text style={{fontWeight: "bold"}}>250-year-old Valley Oak (<Text style={{fontStyle: "italic"}}>Quercus lobata</Text>)</Text> is a reminder that <Text style={{fontWeight: "bold"}}>this landscape was once oak woodland, the land of the Bay Miwoks.</Text>
//         {"\n"} {"\n"}
//         In front of the oak is the enormous <Text style={styles.text}>Agave franzosinni</Text>.
//     </Text>
// const popUpText = 
//     <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20 }}>
//         Agaves are distinguished by their rosettes of tough leaves, often with a spiny margin terminating in a sharp point. 
//         {"\n"} {"\n"}
//         <Text style={{fontStyle:"italic"}}>Look for Agaves in various shapes and sizes throughout the Garden.</Text>
//     </Text>

const map = require('../../images/map/1.jpg')

const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>
    Continue walking to the big V in the path, and go left. Under the row of palm-like plants (Yuccas) find Marker 2. 
    </Text>

// const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>
//     Continue walking to the V in the path, staying left. Under the row of palm-like plants (Yuccas) find Marker 2. 
//     </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={1} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}