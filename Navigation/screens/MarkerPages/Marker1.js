import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_1_1.jpg'),
    require('../../images/Marker_1_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This 250-year-old Valley Oak (Quercus lobata) is a reminder that this landscape was once oak woodland, the land of the Bay Miwoks.
        {"\n"} {"\n"}
        In front of the oak is the enormous Agave franzosinni. Agaves are distinguished by their rosettes of tough leaves, often with a spiny margin terminating in a sharp point. 
        {"\n"} {"\n"}
        Look for Agaves in various shapes and sizes throughout the Garden. 
        {"\n"} {"\n"}

    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={1} text={text}></Marker>
    );
}