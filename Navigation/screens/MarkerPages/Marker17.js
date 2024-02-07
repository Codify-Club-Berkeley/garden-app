import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';
import { db } from '../../../Firebase/firebase'
import { ref, onValue } from 'firebase/database'

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const markerRef = ref(db, 'plants/Marker17');
var data;
onValue(markerRef, (snapshot) => {
    data = snapshot.val() || {};
});
const images = data.imgFirebaseURLs;
// const images = [
//     require('../../images/Marker_17_1.jpg'),
//     require('../../images/Marker_17_2.jpg'),
//     require('../../images/Marker_17_3.jpg')
// ]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        The remarkable  
        <Text style={{fontWeight: "bold"}}> golden barrel cacti (<Text style={{fontStyle: "italic"}}>Echinocactus grusonii</Text>) </Text>
        and the white striped <Text style={{fontWeight: "bold"}}>Queen Victoria’s agave (<Text style={{fontStyle: "italic"}}>Agave victoriae-reginae</Text>) </Text>
        can be found here.
        Following the small path to the right, keep your eyes peeled for a tree with a big swollen trunk which gives it the name of 
        <Text style={{fontWeight: "bold"}}> Australian bottle tree (<Text style={{fontStyle: "italic"}}>Brachychiton rupestris</Text>).</Text>
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
    When you see that tree, remember a succulent is anything that sucks up water. This tree is some succulent!
    </Text>
    

const map = require('../../images/map/17.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>From the stout tree, look ahead and see Marker 18. </Text>


export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={17} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}