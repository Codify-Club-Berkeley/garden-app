import * as React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, Button} from 'react-native';

export default function Marker(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            <FlatList bounces="false"
                data={props.images}
                renderItem={({item}) => <Image source={item} style={{ height: 350, width: 400, top: 0, resizeMode: "resize"}}></Image>}
                horizontal={true}
                ItemSeparatorComponent={
                    (({highlighted}) => (
                      <View
                        style={{width: 10, marginLeft: 0}}
                      />
                    ))
                  }
            />
            {/* <View style={{ borderColor: "#  ", borderWidth: 2, borderRadius: 15, marginTop: -55, backgroundColor: "#rgba(144, 198, 202, .3)", width: 20, height: 20}}>
                <Text></Text>
            </View> */}
            <View style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, marginTop: -25, backgroundColor: "#90C6CA", width: 180, shadowOpacity: 0.3, shadowRadius: 20,}}>
                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '30', alignSelf: "center", color: "white" }}>Marker {props.num}</Text>
            </View>
            <ScrollView>{props.text}</ScrollView>
            <View style={{ borderColor: "#efe4be", borderWidth: 1, borderRadius: 15, backgroundColor: "#90C6CA", width: 150, marginBottom: 10, marginTop: 10, shadowOpacity: 0.3, shadowRadius: 10,}}>
                <Button
                    title="Learn More"
                    color="black"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    );
}