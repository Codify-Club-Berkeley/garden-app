import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_1_1.jpg'),
    require('../../images/Marker_1_2.jpg')
]

const styles = {
    text: {
        fontWeight: "bold", 
        fontStyle: "italic", 
        fontSize: '25'
    }
}

const text = 
    <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This <Text style={{fontWeight: "bold"}}>250-year-old Valley Oak (<Text style={{fontStyle: "italic"}}>Quercus lobata</Text>)</Text> is a reminder that <Text style={{fontWeight: "bold"}}>this landscape was once oak woodland, the land of the Bay Miwoks.</Text>
        {"\n"} {"\n"}
        In front of the oak is the enormous <Text style={styles.text}>Agave franzosinni</Text>. Agaves are distinguished by their rosettes of tough leaves, often with a spiny margin terminating in a sharp point. 
        {"\n"} {"\n"}
        Look for Agaves in various shapes and sizes throughout the Garden. 
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '20' }}>
        Agaves are distinguished by their rosettes of tough leaves, often with a spiny margin terminating in a sharp point. 
        Look for Agaves in various shapes and sizes throughout the Garden.
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={1} text={text} popUpText={popUpText}></Marker>
    );
}