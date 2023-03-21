import React, {useState} from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, Button, Modal,  AppRegistry, Dimensions} from 'react-native';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
export default function Marker(props) {
    const [popUp, setPopUp] = useState(false);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            {/* images */}
             <FlatList bounces="false" 
                data={props.images}
                renderItem={({item}) => <Image source={item} style={{falignSelf: 'center', height: height*0.4, width: width, top: 0, resizeMode: "resize"}}></Image>}
                horizontal={true}
                ItemSeparatorComponent={
                    (({highlighted}) => (
                      <View
                        style={{width: 10, marginLeft: 0}}
                      />
                    ))
                  }
            />
            {/* Marker Heading */}
            <View style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, marginTop: -25, backgroundColor: "#90C6CA", width: 180, shadowOpacity: 0.3, shadowRadius: 20,}}>
                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '30', alignSelf: "center", color: "white" }}>Marker {props.num}</Text>
            </View>
            {/* Text */}
            <ScrollView>{props.text}</ScrollView>
            <View style={{ borderColor: "#efe4be", borderWidth: 1, borderRadius: 15, backgroundColor: "#90C6CA", width: 150, marginBottom: 10, marginTop: 10, shadowOpacity: 0.3, shadowRadius: 10,}}>
                <Button
                    onPress={() => {
                        setPopUp(!popUp)
                    }}
                    title="Learn More"
                    color="black"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <Modal transparent={true} visible={popUp}>
                <View style={{backgroundColor: "#000000aa", flex: 1, alignContent: 'center'}}>
                    <View style={{backgroundColor: "#efe4be", margin: 30, marginTop: 250, padding: 15, borderRadius: 10, alignSelf: 'center'}}>
                        {props.popUpText}
                        <View style={{flexDirection: 'row'}}>
                        <View style={{ borderColor: "#efe4be", borderWidth: 1, borderRadius: 15, backgroundColor: "#90C6CA", width: 120, marginBottom: 10, marginTop: 10, marginRight: 10, shadowOpacity: 0.3, shadowRadius: 10}}>
                            <Button
                                onPress={() => {
                                    setPopUp(!popUp)
                                }}
                                title="More Pictures"
                                color="black"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                        <View style={{ borderColor: "#efe4be", borderWidth: 1, borderRadius: 15, backgroundColor: "#90C6CA", width: 120, marginBottom: 10, marginTop: 10, shadowOpacity: 0.3, shadowRadius: 10}}>
                            <Button
                                onPress={() => {
                                    setPopUp(!popUp)
                                }}
                                title="Next Marker"
                                color="black"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}