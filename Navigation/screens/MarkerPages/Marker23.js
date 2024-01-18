import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/NewMarker_23_1.jpg'),
    require('../../images/Marker_23_1.jpg'),
    require('../../images/Marker_23_2.jpg'),
    require('../../images/Marker_23_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        The Garden is a study in art elements, including textures and shades of green; 
        from the bark of the <Text style={{fontWeight: "bold"}}>Palo Verde</Text> with its tiny textured leaves, 
        to the repetition of the bright-green, low-clumping <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Agave mitis</Text>, 
        to the left where the gigantic dark-green leaves of <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Agave salmiana</Text> dominate.
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        Large agaves are often <Text style={{fontWeight: "bold"}}>called century plants because they flower only once after a long life</Text>. 
        Although death follows, many produce ‘pups’ from the base, providing the next generation of plants.    
    </Text> 

const map = require('../../images/map/23.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>Walk to the very end of the covered-structure. The mound to the caddy corner to the covered bed holds Marker 24.  </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={23} text={text} popUpText={popUpText} navigation={navigation} map={map}directions={directions}></Marker>
    );
}