import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';
import { db } from '../../../Firebase/firebase'
import { ref, onValue } from 'firebase/database'

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const markerRef = ref(db, 'plants/Marker6');
var data;
onValue(markerRef, (snapshot) => {
    data = snapshot.val() || {};
});
const images = data.imgFirebaseURLs;
// const images = [
//     require('../../images/New_Marker_6_1.jpg'),
//     require('../../images/New_Marker_6_2.jpg'),
// ]

const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        Just behind the rock, is an <Text style={{ fontWeight: "bold" }}>
        aloe with unusual pagoda-like leaves, named <Text style={{ fontStyle: "italic" }}>
        Aloe</Text> ‘Hellskloof Bells.’</Text>
        {"\n"}{"\n"}
        Our curator, Brian Kemble, specializes in hybridizing many different kinds of plants, 
        including aloes like the 'Hellskloof Bells.'
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        Can you spot the multi-trunked <Text style={{ fontWeight: "bold" }}>
        Torrey pine tree (<Text style={{ fontStyle: "italic" }}>
        Pinus torreyana</Text>)</Text> in the far left corner of this bed? 
        Many trees in the Garden were <Text style={{ fontWeight: "bold" }}>
        planted from small one-gallon containers in 1972</Text>.
    </Text> 

// const text = 
//     <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
//         The tall, multi-trunked tree in the far left corner of this bed is a <Text style={{fontWeight: "bold"}}>Torrey pine (<Text style={{fontStyle: "italic"}}>Pinus torreyana</Text>). </Text>
//         Like many trees in the Garden, it was planted from a small one-gallon container in 1972.
//         {"\n"} {"\n"}
//         In the foreground, just behind the rock, is an <Text style={{fontWeight: "bold"}}>aloe with unusual pagoda-like leaves, 
//         named <Text style={{fontStyle: "italic"}}>Aloe</Text> ‘Hellskloof Bells.’</Text>
//     </Text>

// const popUpText = 
//     <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
//         Our curator, Brian Kemble, specializes in hybridizing many different kinds of plants, 
//         including aloes. Other than in this Garden, some of his creations can be seen nowhere else in the world. 
//     </Text> 

const map = require('../../images/map/6.jpg')

const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>
    Turn right down the small path. Just before the tree with red bark is Marker 7.
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={6} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}