import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_10_1.jpg'),
    require('../../images/Marker_10_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This bed contains numerous <Text style={{fontWeight: "bold"}}> gasterias</Text>. 
        Relatives of the aloe, the name <Text style={{fontStyle: "italic"}}>gaster</Text> (Greek for stomach), 
        describes the plant’s pot-bellied flowers.
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '25'}}>
        <Text style={{fontWeight: "bold"}}>Latin names</Text> can be descriptive, 
        tell of a plant’s origin, carry someone’s name, and much more. 
        {"\n"} {"\n"}
        <Text style={{fontWeight: "bold"}}>Common names</Text> are often inconsistent or vary by region, 
        making Latin names key to proper plant identification.
    </Text> 

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={10} text={text} popUpText={popUpText}></Marker>
    );
}