import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Marker from '../Marker';

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2.5

const images = [
    require('../../images/Marker_16_1.jpg'),
    require('../../images/Marker_16_2.jpg'),
    require('../../images/Marker_16_3.jpg')
]
const text = 
    <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
        Along the path is a drift of <Text style={{fontWeight: "bold", fontStyle: "italic"}}>aloes</Text>.
        {"\n"} {"\n"}
        Toward the center of the bed are the <Text style={{fontWeight: "bold"}}>only palms native to California, <Text style={{fontStyle: "italic"}}>Washingtonia filifera</Text>.</Text>
        {"\n"} {"\n"}
        The <Text style={{fontWeight: "bold"}}>(<Text style={{fontStyle: "italic"}}>Erythrina x bidwillii</Text>)</Text>, 
        to the right of the palms is a blaze with red flowers in the summer and is cut back in winter.
    </Text>

const popUpText = 
    <Text style={{padding: 15, fontFamily: "Times New Roman", fontSize: '20'}}>
        Like the majority of plants in the Garden, these <Text style={{fontWeight: "bold"}}>specimens all come from Mediterranean climates, 
        characterized by hot dry summers and wet winters</Text>. 
        Gardeners wishing to save water, should select plants that are adapted to a Mediterranean climate.    
    </Text> 

const map = require('../../images/map/16.jpg')

export default function MarkerScreen({ navigation }) {
    return (
        <Marker images={images} num={16} text={text} popUpText={popUpText} navigation={navigation} map={map}></Marker>
    );
}