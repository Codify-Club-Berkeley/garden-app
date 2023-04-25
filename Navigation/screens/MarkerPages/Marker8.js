import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_8_1.jpg'),
    require('../../images/Marker_8_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        There are tall plants in this bed distinctive for their fountains of long grass-like leaves.
        {"\n"} {"\n"}
        This species of <Text style={{fontWeight: "bold"}}>
        (<Text style={{fontStyle: "italic"}}>Xanthorrhoea preissii</Text>) 
        from Australia will eventually develop a trunk up to 12 feet tall!</Text>
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '20'}}>
        From the center of the Xanthorrhoea foliage arises a tall, 
        spear-like flower stalk. Fire stimulates increased flower production.
        {"\n"} {"\n"}
        Unfortunately, many plants adapted to fire are no match for the mega-fires brought about by climate change.
    </Text> 

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={8} text={text} popUpText={popUpText}></Marker>
    );
}