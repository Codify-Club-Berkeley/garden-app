import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_6_1.jpg'),
    require('../../images/Marker_6_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        The tall, multi-trunked tree in the far left corner of this bed is a <Text style={{fontWeight: "bold"}}>Torrey pine (<Text style={{fontStyle: "italics"}}>Pinus torreyana</Text>).</Text>
        Like many trees in the Garden, it was planted from a small one-gallon container in 1972.
        {"\n"} {"\n"}
        In the foreground, just behind the rock, is an <Text style={{fontWeight: "bold"}}>aloe with unusual pagoda-like leaves, 
        named <Text style={{fontWeight: "italics"}}>Aloe</Text> ‘Hellskloof Bells.’</Text>
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={1} text={text}></Marker>
    );
}