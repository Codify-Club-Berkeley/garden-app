import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_21_1.jpg'),
    require('../../images/Marker_21_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This tree with a remarkably spiny trunk is a <Text style={{fontWeight: "bold"}}>silk floss tree (<Text style={{fontStyle: "italic"}}>Ceiba speciosa</Text>.</Text>
        {"\n"} {"\n"}
        The cotton-like fibers within its seed pods were traditionally used for insulation in sleeping bags and clothing.
        {"\n"} {"\n"}
        Its large, pink, orchid-like flowers are profuse in autumn, appearing just as its leaves drop.
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={21} text={text}></Marker>
    );
}