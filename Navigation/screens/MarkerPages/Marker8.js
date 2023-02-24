import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_8_1.jpg'),
    require('../../images/Marker_8_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        There are tall plants in this bed distinctive for their fountains of long grass-like leaves.
        {"\n"} {"\n"}
        This species of <Text style={{fontWeight: "bold"}}>
        (<Text style={{fontWeight: "italics"}}>Xanthorrhoea preissii</Text>) 
        from Australia will eventually develop a trunk up to 12 feet tall!</Text>
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={1} text={text}></Marker>
    );
}