import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_9_1.jpg'),
    require('../../images/Marker_9_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        While this <Text style={{fontWeight: "bold"}}>Mexican grass tree (<Text style={{fontStyle: "italic"}}>Dasylirion longissimum</Text>) </Text>
        with its fountain-like form looks strikingly similar to the grass tree at tour stop 8, 
        it is a member of a different plant family from a different continent. 
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={9} text={text}></Marker>
    );
}