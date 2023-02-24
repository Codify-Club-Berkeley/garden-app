import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_10_1.jpg'),
    require('../../images/Marker_10_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This bed contains numerous <Text style={{fontWeight: "bold"}}> gasterias </Text>. 
        Relatives of the aloe, the name <Text style={{fontWeight: "italics"}}>gaster</Text> (Greek for stomach), 
        describes the plant’s pot-bellied flowers.
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={10} text={text}></Marker>
    );
}