import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';

export default function Marker(props) {
    return (
        <View style={{ dlex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            <FlatList bounces="false"
                data={props.images}
                renderItem={({item}) => <Image source={item} style={{ height: 300, width: 400, top: 0, resizeMode: "resize"}}></Image>}
                horizontal={true}
                ItemSeparatorComponent={
                    (({highlighted}) => (
                      <View
                        style={{width: 10, marginLeft: 0}}
                      />
                    ))
                  }
            />
            <View style={{ borderColor: "#  ", borderWidth: 2, borderRadius: 15, marginTop: -55, backgroundColor: "#rgba(144, 198, 202, .3)", width: 20, height: 20}}>
                <Text></Text>
            </View>
            <View style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, marginTop: 5, backgroundColor: "#90C6CA", width: 180}}>
                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '30', alignSelf: "center", color: "white" }}>Marker {props.num}</Text>
            </View>
            {props.text}
        </View>
    );
}