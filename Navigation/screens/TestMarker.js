import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';


export default function MarkerScreen({ navigation }) {
    return (
        <View style={{ dlex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            <ScrollView bounces="false">
                <View style={{flexDirection: "row"}}>
                    <Image source={require("../images/Marker_1_1.jpg")} style={{ height: 300, width: 400, top: 0, resizeMode: "resize", borderW: 10}}></Image>
                    <Image source={require("../images/Marker_1_2.jpg")} style={{ height: 300, width: 400, top: 0, resizeMode: "resize"}}></Image>
                </View>
            </ScrollView>
            <View style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, marginTop: -35, backgroundColor: "#90C6CA", width: 180}}>
                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '30', alignSelf: "center", color: "white" }}>Marker 1</Text>
            </View>
            <Text style={{ padding: 20, paddingBottom: 37, fontFamily: "Times New Roman", fontSize: '20' }}>   
                This majestic Valley Oak (Quercus lobata) is one of the few plants Ruth Bancroft did not plant in the Garden. At 250 years old, it is a reminder that this landscape was once oak woodland until early 1900 when orchards came to dominate.
                {"\n"} {"\n"}
                In front of the oak, the enormous, powdery blue-gray Agave franzosinni is something Ruth did plant. Agaves were one of Ruth’s favorite plants and you can see their rosette form in various shapes and sizes throughout the Garden.   
            </Text>
        </View>
    );
}