import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_11_1.jpg'),
    require('../../images/Marker_11_2.jpg'),
    require('../../images/Marker_11_3.jpg'),
    require('../../images/Marker_11_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        Three remarkable specimens are in this bed, the <Text style={{fontWeight: "bold"}}><Text style={{fontStyle: "italic"}}>Eucalyptus kitsoniana</Text> with its wavy bark, </Text>
        a hedge of <Text style={{fontWeight: "bold"}}>torch aloes (<Text style={{fontStyle: "italic"}}>Aloe arborescens</Text>) </Text>
        before you, and to the right, the <Text style={{fontWeight: "bold"}}>tree-like Hercules aloe (<Text style={{fontStyle: "italic"}}>Aloe barberae x A. dichotoma</Text>).</Text>
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '25'}}>
        You will notice that unlike most gardens that are arranged by plant type or origin, 
        this Garden is arranged compositionally. There is an <Text style={{fontWeight: "bold"}}>intentional lack of signage</Text>, 
        to preserve Ruth’s original vision.
    </Text> 

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={11} text={text} popUpText={popUpText}></Marker>
    );
}