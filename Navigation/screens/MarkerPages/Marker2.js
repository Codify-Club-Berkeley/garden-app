import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_2_1.jpg'),
    require('../../images/Marker_2_2.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This majestic Oak (Quercus lobata) is one of the few plants Ruth Bancroft did not plant in the Garden. At 250 years old, it is a reminder that this landscape was once oak woodland until early 1900 when orchards came to dominate.
        {"\n"} {"\n"}
        In front of the oak, the enormous, powdery blue-gray Agave franzosinni is something Ruth did plant. Agaves were one of Ruth’s favorite plants and you can see their rosette form in various shapes and sizes throughout the Garden.   
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={2} text={text}></Marker>
    );
}