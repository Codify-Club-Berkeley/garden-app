import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_3_1.jpg'),
    require('../../images/Marker_3_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        <Text style={{fontStyle: "italic"}}>When you think of the word “succulent,” what comes to mind?</Text>
        {"\n"} {"\n"}
        Probably not a tall, stout-trunked specimen like this <Text style={{fontWeight: "bold"}}>Chilean wine palm (<Text style={{fontStyle: "italic"}}>Jubaea chilensis</Text>).</Text>
        {"\n"} {"\n"}
        <Text style={{fontWeight: "bold"}}>A succulent, by definition, is any plant that stores water.</Text>
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={3} text={text}></Marker>
    );
}