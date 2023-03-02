import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_19_1.jpg'),
    require('../../images/Marker_19_2.jpg'),
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        Growing below the Chilopsis linearis tree, many of the plants in this bed have 
        <Text style={{fontWeight: "bold"}}> white silky hairs or spines, a strategy for deflecting the hot summer sun.</Text>
        {"\n"} {"\n"}
        Such specimens include <Text style={{fontWeight: "bold"}}><Text style={{fontStyle: "italic"}}> Cleistocactus, Oreocereus, </Text>
        and the ground-covering <Text style={{fontStyle: "italic"}}>Sempervivum arachnoideumm</Text> </Text>
        that look to be covered in white cobwebs.
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '25'}}>
        Further along the path, notice the <Text style={{fontWeight: "bold"}}>lumpy masses of <Text style={{fontStyle: "italic"}}>Deuterocohnia brevifolia</Text></Text>. 
        It may look like it covers a rock, but it doesn’t; this is just how it grows.     
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={19} text={text} popUpText={popUpText}></Marker>
    );
}