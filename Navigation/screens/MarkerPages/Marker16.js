import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_16_1.jpg'),
    require('../../images/Marker_16_2.jpg'),
    require('../../images/Marker_16_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        Along the path is a drift of <Text style={{fontWeight: "bold", fontStyle: "italics"}}>aloes</Text>.
        {"\n"} {"\n"}
        Toward the center of the bed are the <Text style={{fontWeight: "bold"}}> only palms native to California, 
        <Text style={{fontWeight: "italics"}}>Washingtonia filifera</Text>.</Text>
        {"\n"} {"\n"}
        The <Text style={{fontWeight: "bold"}}> (<Text style={{fontWeight: "italic"}}>rythrina x bidwillii</Text>)</Text>, 
        to the right of the palms is a blaze with red flowers in the summer and is cut back in winter.
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={16} text={text}></Marker>
    );
}