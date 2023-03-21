import React, {useState} from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, Button, Modal} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper: {},
    container: {
        backgroundColor: 'transparent',
        position: 'relative',
        flex: 5
      },
    image: {
        height: 350,
        width: 400,
        top: 0,
        resizeMode: "resize"
    }
  })

export default function Marker(props) {
    const [popUp, setPopUp] = useState(false);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            {/* images */}
             {/* <FlatList bounces="false" 
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
            /> */}
            <Swiper
            style={styles.swiperContainer}
            loop={false}
            index={1}
            paginationStyle={{ bottom: 28 }}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}>
            {props.images.map((image, index) => (
                <Image
                key={index}
                style={styles.image}
                source={image}
                />
            ))}
            </Swiper>
            {/* Marker Heading */}
            <View style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, marginTop: -25, backgroundColor: "#90C6CA", width: 180, shadowOpacity: 0.3, shadowRadius: 20,}}>
                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '30', alignSelf: "center", color: "white" }}>Marker {props.num}</Text>
            </View>
            {/* Text */}
            <ScrollView>{props.text}</ScrollView>
            <View style={{ borderColor: "#efe4be", borderWidth: 1, borderRadius: 15, backgroundColor: "#90C6CA", width: 150, marginBottom: 10, marginTop: -25, shadowOpacity: 0.3, shadowRadius: 10,}}>
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
                        <View style={{ borderColor: "#efe4be", borderWidth: 1, borderRadius: 15, backgroundColor: "#90C6CA", width: 120, marginBottom: 10, marginTop: 10, marginRight: 10, marginLeft: 9,shadowOpacity: 0.3, shadowRadius: 10}}>
                            <Button
                                onPress={() => {
                                    setPopUp(!popUp)
                                }}
                                title="Back"
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