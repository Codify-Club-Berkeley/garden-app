import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_17_1.jpg'),
    require('../../images/Marker_17_2.jpg'),
    require('../../images/Marker_17_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This bed displays two dramatic specimens, 
        the <Text style={{fontWeight: "bold"}}>golden barrel cacti (<Text style={{fontWeight: "italic"}}>Echinocactus grusonii</Text>) </Text>
        and the <Text style={{fontWeight: "bold"}}>Queen Victoria’s agave (<Text style={{fontWeight: "italic"}}>Agave victoriae-reginae</Text>) </Text>
        with their striking white markings on sculptural, dark-green leaves.
        {"\n"} {"\n"}
        Following the small path to the right, you will arrive at a stout tree whose swollen trunk gives it the name of
        <Text style={{fontWeight: "bold"}}> Australian bottle tree (<Text style={{fontWeight: "italics"}}>Brachychiton rupestris</Text>).</Text>
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={17} text={text}></Marker>
    );
}