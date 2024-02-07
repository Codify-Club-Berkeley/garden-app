import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';
import { db } from '../../../Firebase/firebase'
import { ref, onValue } from 'firebase/database'

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const markerRef = ref(db, 'plants/Marker15');
var data;
onValue(markerRef, (snapshot) => {
    data = snapshot.val() || {};
});
const images = data.imgFirebaseURLs;
// const images = [
//     require('../../images/Marker_15_1.jpg'),
//     require('../../images/Marker_15_2.jpg'),
// ]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        It may seem surprising to find a pond at the heart of a dry garden. The <Text style={{fontWeight: "bold"}}>pond provides an oasis within the Garden</Text>, 
        acting as a cool, shady counterpoint to the sun-exposed areas.
        {"\n"} {"\n"}
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        The <Text style={{fontWeight: "bold"}}>tall gazebo-like structure, known as Ruth’s Folly,</Text> once <Text style={{fontWeight: "bold"}}>served as the Garden’s entrance. </Text>
        {"\n"}{"\n"}
        <Text style={{fontStyle: "italic"}}>Ruth started the Garden at age 63. 
        What projects can you imagine starting at this age?</Text>
    </Text> 

const map = require('../../images/map/15.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>Continue ahead toward the three large palms. Marker 16 sits next to the light pole.</Text>


export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={15} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}