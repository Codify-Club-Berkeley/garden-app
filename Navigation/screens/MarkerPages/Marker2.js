import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

const images = [
    require('../../images/Marker_2_1.jpg'),
    require('../../images/Marker_2_2.jpg')
]

const text = 
    <Text style={{ padding: 20, fontFamily: "Times New Roman", fontSize: '20' }}>
        These <Text style={{fontWeight: 'bold'}}>yucca species</Text> look a lot like palms, but they are from a completely different plant family. {'\n\n'}
        Yuccas have a <Text style={{fontWeight: 'bold'}}>mutual relationship with the yucca moth</Text> (<Text style={{fontStyle: "italic"}}>Tegeticula</Text> sp.) which is the only insect that pollinates them, and not present in Walnut Creek.
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '25' }}>
        After pollinating a yucca, a moth will lay its eggs in the flowers. The emerging larvae survive only on Yucca seeds. 
        Fortunately, there are enough seeds that fall to the ground and ensure the tree’s survival.
    </Text>


export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={2} text={text} popUpText={popUpText}></Marker>
    );
}