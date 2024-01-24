import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_12_1.jpg'),
    require('../../images/Marker_12_2.jpg'),
    require('../../images/Marker_12_3.jpg'),
    require('../../images/Marker_12_4.jpg'),
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        On both sides of the path you will see <Text style={{fontWeight: "bold"}}>Ruth’s incredible use of color and texture </Text>
        in the <Text style={{fontWeight: "bold"}}>groundcover tapestry of the blue-gray <Text style={{fontStyle: "italic"}}>Euphorbia rigida</Text>, 
        purple <Text style={{fontStyle: "italic"}}>Tradescantia pallida ‘Purple Heart’</Text>, and 
        bright green (to red) <Text style={{fontStyle: "italic"}}>Sedum rubrotinctum</Text>.</Text>
        {"\n"} {"\n"}
        Look ahead to see the <Text style={{fontWeight: "bold"}}>Mexican palo verde (<Text style={{fontStyle: "italic"}}>Parkinsonia aculeata</Text>)</Text>, 
        with its green bark and fine-textured canopy.
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        Planting ‘en masse’ (filling a space with a clump of the same plant), combining foliage color and textures are all design elements that help keep a garden interesting, even when there is nothing in bloom.    
    </Text> 

const map = require('../../images/map/12.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>Onward, just around the corner, look right to see Marker 13.</Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={12} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}