import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../../../assets/Marker';

const images = [
    require('../../images/Marker_18_1.jpg'),
    require('../../images/Marker_18_2.jpg'),
    require('../../images/Marker_18_3.jpg'),
    require('../../images/Marker_18_4.jpg'),
    require('../../images/Marker_18_5.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        This garden bed is dominated by cacti of various species and forms, all native to the Americas.
        {"\n"} {"\n"}
        You can see the <Text style={{fontWeight: "bold"}}>three forms cacti</Text> take: 
        the <Text style={{fontWeight: "bold"}}>spherical barrel</Text> cacti, 
        the <Text style={{fontWeight: "bold"}}>columnar cacti</Text>, 
        and the <Text style={{fontWeight: "bold"}}>paddle cactus</Text> from the genus <Text style={{fontWeight: "italics"}}>Opuntia</Text>.
    </Text>

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={18} text={text}></Marker>
    );
}