import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_7_1.jpg'),
    require('../../images/Marker_7_2.jpg'),
    require('../../images/Marker_7_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        The path here is constricted by two interesting plants. On the right is the native, <Text style={{fontWeight: "bold"}}>red-barked manzanita (<Text style={{fontStyle: "italic"}}>Arctostaphylos</Text> ‘Ruth Bancroft’).</Text>
        {"\n"} {"\n"}
        The tree on the left, with <Text style={{fontWeight: "bold"}}>weeping foliage, is the Australian <Text style={{fontStyle: "italic"}}>Melaleuca preissiana</Text>, </Text>
        also known as a tea tree.
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={7} text={text}></Marker>
    );
}