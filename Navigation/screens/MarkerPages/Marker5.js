import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_5_1.jpg'),
    require('../../images/Marker_5_2.jpg'),
    require('../../images/Marker_5_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        <Text style={{fontWeight: "bold"}}>The Garden displays a thriving community of California native plants</Text>, 
        many of which need well-draining soil, including one of the few agaves native to California, 
        the <Text style={{fontWeight: "bold", fontStyle: "italics"}}>Agave shawii</Text>, 
        as well as the iconic <Text style={{fontWeight: "bold"}}>Joshua tree <Text style={{fontStyle: "italics"}}>(Yucca brevifolia).</Text></Text>
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={5} text={text}></Marker>
    );
}