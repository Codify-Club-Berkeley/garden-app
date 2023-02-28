import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_23_1.jpg'),
    require('../../images/Marker_23_2.jpg'),
    require('../../images/Marker_23_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        The Garden is a study in art elements, including textures and shades of green; 
        from the bark of the <Text style={{fontWeight: "bold"}}>Palo Verde</Text> with its tiny textured leaves, 
        to the repetition of the bright-green, low-clumping <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Agave mitis</Text>, 
        to the left where the gigantic dark-green leaves of <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Agave salmiana</Text> dominate.
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={23} text={text}></Marker>
    );
}