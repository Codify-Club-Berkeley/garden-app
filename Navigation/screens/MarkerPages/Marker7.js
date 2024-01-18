import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_7_1.jpg'),
    require('../../images/Marker_7_2.jpg'),
    require('../../images/Marker_7_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: 20 }}>   
        The path here is constricted by two interesting plants. On the right is the small red-barked manzanita tree <Text style={{fontWeight: "bold"}}>(<Text style={{fontStyle: "italic"}}>Arctostaphylos</Text> ‘Ruth Bancroft’). </Text>
         Manzanita is an iconic native California plant.
        {"\n"} {"\n"}
        The tree on the left, with weeping foliage and secret understory, is the<Text style={{fontWeight: "bold"}}> Australian <Text style={{fontStyle: "italic"}}>Melaleuca preissiana</Text>, </Text>
        also known as a tea tree.
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: 20}}>
        Like many plants in the Garden, these plants have 
        <Text style={{fontWeight: "bold"}}> ethnobotanical importance</Text>; 
        Indigenous Californians use manzanita berries for cider (among other things), 
        and the Australian Aboriginal people use the tea tree oil for traditional medicine.   
    </Text> 

const map = require('../../images/map/7.jpg')

const directions = <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: 20 }}>
    Straight ahead you will see a clump of ‘grass trees’ and Marker 8.
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={7} text={text} popUpText={popUpText} navigation={navigation} map={map} directions={directions}></Marker>
    );
}