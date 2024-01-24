import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_22_1.jpg'),
    require('../../images/NewMarker22_2.jpg'),
    require('../../images/Marker_22_3.jpg'),
    require('../../images/Marker_22_4.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        The plants in this central covered bed all need extra protection from the summer sun and winter cold.
        {"\n"} {"\n"}
        Before proceeding to the next marker - you owe it to yourself to go through the covered structure to admire the tapestry of color. 
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        Under the structure you will see many plants from the <Text style={{fontWeight: "bold"}}> Crassulaceae family, 
        including <Text style={{fontStyle: "italic"}}>Aeonium, Echeveria, Crassula, </Text> 
        and <Text style={{fontStyle: "italic"}}>Sedum</Text>.</Text>
    </Text> 

const map = require('../../images/map/22.jpg')
const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>If you ventured along this covered bed, you will need to return to Marker 22 to find 23. Staying outside the covered structure, follow the path parallel, under the green-barked tree is Marker 23. </Text>


export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={22} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}