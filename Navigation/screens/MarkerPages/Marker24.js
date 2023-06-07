import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.3

const images = [
    require('../../images/Marker_24_1.jpg'),
    require('../../images/Marker_24_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This bed features a <Text style={{fontWeight: "bold"}}>South African cycad (<Text style={{fontStyle: "italic"}}>Encephalartos horridus</Text>)</Text>.  
        <Text style={{fontWeight: "bold"}}> Cycads are ancient plants, </Text>
        reproducing by cones, they evolved before the time of flowers.
        {"\n"} {"\n"}
        On the right is a <Text style={{fontWeight: "bold"}}>member of the Proteaceae family, <Text style={{fontStyle: "italic"}}>Grevillea ‘Kings Fire’</Text></Text>.
        Members of the Proteaceae family are found in South Africa, South America and Australia.
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '20'}}>
        How do plants on three different continents share a family?
        {"\n"} {"\n"}
        It is because 150 million years ago, these continents were all part of the supercontinent of Gondwanaland.
    </Text> 

// const map = require('../../images/map/24.jpg')

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={24} text={text} popUpText={popUpText} navigation={navigation}></Marker>
    );
}