import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_6_1.jpg'),
    require('../../images/Marker_6_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        The tall, multi-trunked tree in the far left corner of this bed is a <Text style={{fontWeight: "bold"}}>Torrey pine (<Text style={{fontStyle: "italic"}}>Pinus torreyana</Text>). </Text>
        Like many trees in the Garden, it was planted from a small one-gallon container in 1972.
        {"\n"} {"\n"}
        In the foreground, just behind the rock, is an <Text style={{fontWeight: "bold"}}>aloe with unusual pagoda-like leaves, 
        named <Text style={{fontStyle: "italic"}}>Aloe</Text> ‘Hellskloof Bells.’</Text>
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '20'}}>
        Our curator, Brian Kemble, specializes in hybridizing many different kinds of plants, 
        including aloes. Other than in this Garden, some of his creations can be seen nowhere else in the world. 
    </Text> 

const map = require('../../images/map/6.jpg')

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={6} text={text} popUpText={popUpText} navigation={navigation} map={map}></Marker>
    );
}