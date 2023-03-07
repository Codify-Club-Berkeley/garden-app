import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_4_1.jpg'),
    require('../../images/Marker_4_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        Notice the assortment of aloes in this bed. Like the agave, the aloe takes a rosette form, 
        but unlike the agave that originates in the Americas, 
        the <Text style={{fontWeight: "bold"}}>aloe comes from Africa, Arabia, and Madagascar.</Text> 
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '20'}}>
        Aloes’ thick, fleshy leaves, and often toothy leaf edges also distinguish them from agaves.
        {"\n"} {"\n"}
        <Text style={{fontWeight: "bold"}}>Aloes are polycarpic (produce flowers season after season), 
        whereas the agave is monocarpic (blooms only once in its lifetime).</Text>
    </Text> 

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={4} text={text} popUpText={popUpText}></Marker>
    );
}