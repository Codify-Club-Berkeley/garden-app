import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_13_1.jpg'),
    require('../../images/Marker_13_2.jpg'),
    require('../../images/Marker_13_3.jpg'),
    require('../../images/Marker_13_4.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
       The <Text style={{fontWeight: "bold"}}> spiky, green clump in the foreground is a dyckia</Text>. 
       These plants are characterized by sharply hooked spines edging their stiff leaves.
       {"\n"} {"\n"}
       On the other side of the path you will see more rosettes; this time the smooth leafed <Text style={{fontWeight: "bold"}}> 
       hybrid of <Text style={{fontWeight: "italic"}}>Agave</Text> and <Text style={{fontWeight: "italic"}}>Manfreda</Text>, 
       known as <Text style={{fontWeight: "italic"}}>Mangave</Text>.</Text>
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={13} text={text}></Marker>
    );
}