import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_22_1.jpg'),
    require('../../images/Marker_22_2.jpg'),
    require('../../images/Marker_22_3.jpg'),
    require('../../images/Marker_22_4.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        The plants in this central covered bed all need extra protection from the summer sun and winter cold.
        {"\n"} {"\n"}
        Many of these plants are from the <Text style={{fontWeight: "bold"}}> Crassulaceae family, 
        including <Text style={{fontStyle: "italic"}}>Aeonium, Echeveria, Crassula, </Text> 
        and <Text style={{fontStyle: "italic"}}>Sedum</Text>.</Text>
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={22} text={text}></Marker>
    );
}