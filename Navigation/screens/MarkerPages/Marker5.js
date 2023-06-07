import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_5_1.jpg'),
    require('../../images/Marker_5_2.jpg'),
    require('../../images/Marker_5_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        <Text style={{fontWeight: "bold"}}>The Garden displays a thriving community of California native plants</Text>, 
        many of which need well-draining soil, including one of the few agaves native to California, 
        the <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Agave shawii</Text>, 
        as well as the iconic <Text style={{fontWeight: "bold"}}>Joshua tree (<Text style={{fontStyle: "italic"}}>Yucca brevifolia</Text>).</Text>
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '20'}}>
        To improve drainage, create a natural look, and vary the topography,
        <Text style={{fontWeight: "bold"}}> many tons of crushed rock from Mt. Diablo were laid at the start of the Garden.</Text>
    </Text> 

const map = require('../../images/map/5.jpg')

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={5} text={text} popUpText={popUpText} navigation={navigation} map={map}></Marker>
    );
}