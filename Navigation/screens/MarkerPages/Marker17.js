import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_17_1.jpg'),
    require('../../images/Marker_17_2.jpg'),
    require('../../images/Marker_17_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This bed displays two dramatic specimens, 
        the <Text style={{fontWeight: "bold"}}>golden barrel cacti (<Text style={{fontStyle: "italic"}}>Echinocactus grusonii</Text>) </Text>
        and the <Text style={{fontWeight: "bold"}}>Queen Victoria’s agave (<Text style={{fontStyle: "italic"}}>Agave victoriae-reginae</Text>) </Text>
        with their striking white markings on sculptural, dark-green leaves.
        {"\n"} {"\n"}
        Following the small path to the right, you will arrive at a stout tree whose swollen trunk gives it the name of
        <Text style={{fontWeight: "bold"}}> Australian bottle tree (<Text style={{fontStyle: "italic"}}>Brachychiton rupestris</Text>).</Text>
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '25'}}>
        <Text style={{fontStyle: "italic"}}>Remember the Palo Verde with its green bark, 
        or the thick Chilean Wine Palm at the beginning of the tour? 
        Can you guess why the bottle tree is so stout, and possesses green bark?</Text>
    </Text> 

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={17} text={text} popUpText={popUpText}></Marker>
    );
}