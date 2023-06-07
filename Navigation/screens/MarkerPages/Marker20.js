import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_20_1.jpg'),
    require('../../images/Marker_20_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        The spectacular multi branched cactus adjacent to the fence is from the genus 
        <Text style={{fontWeight: "bold", fontStyle: "italic"}}> Cereus</Text>, 
        whose name is derived from the Latin word for “candle,” suggested by its form. 
        {"\n"} {"\n"}
        At its base is a horizontal tangle of <Text style={{fontWeight: "bold"}}>South American cacti, 
        including the <Text style={{fontStyle: "italic"}}>Echinopsis</Text> ‘Cherry Red’ </Text>
        with snake-like arms.

    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '20'}}>
        <Text style={{fontWeight: "bold"}}>Both cacti are pollinated by bats</Text>, 
        yet take distinctively different forms.
    </Text>

const map = require('../../images/map/20.jpg')

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={20} text={text} popUpText={popUpText} navigation={navigation} map={map}></Marker>
    );
}