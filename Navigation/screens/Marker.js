import React, {useState} from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, Button, Modal, AppRegistry, Dimensions, TouchableHighlight} from 'react-native';
import Swiper from 'react-native-swiper';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 2

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
        resizeMode: "resize",
        height: height*0.4, 
        width: width,
    },
    paginationStyle: {
        position: 'absolute',
        //bottom: 10,
        //right: 10,
        //justifyContent: 'center',
        //alignItems: 'center',
        alignSelf: 'center'
      },
      paginationText: {
        color: 'white',
        fontSize: 17,
        //alignSelf: 'center',
        padding: 5
      }
  })



const renderPagination = (index, total, context) => {
    return (
        <View style={{backgroundColor: 'grey', maxHeight: height/18, maxWidth: width/8, alignSelf: 'flex-end', marginRight:10, marginTop: -height/20, borderRadius: 10}}>
            <Text style={styles.paginationText}>{index + 1}/{total}</Text>
            {/*
            <View style={styles.paginationStyle}>
                <Text style={styles.paginationText}>{index + 1}/{total}</Text>
            </View>
    */}
        </View>
    )
  }

export default function Marker(props) {
    const [popUp, setPopUp] = useState(false);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            {/* images */}
             {/* <FlatList bounces="false" 
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
            /> */}
            <Swiper
            style={styles.swiperContainer}
            loop={false}
            index={0}
            renderPagination={renderPagination}
            // paginationStyle={{ bottom: 28 }}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            dotColor={"#808080"}
            activeDotColor={"#efe4be"}>
            {props.images.map((image, index) => (
                <Image
                key={index}
                style={styles.image}
                source={image}
                />
            ))}
            </Swiper>
            {/* Marker Heading */}
            <View style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, marginTop: -25, marginBottom: 10, backgroundColor: "#90C6CA", maxWidth: width/1.2, shadowOpacity: 0.3, shadowRadius: 20}}>
                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '30', alignSelf: "center", color: "white" }}>Marker {props.num}</Text>
            </View>
            {/* Text */}
            <ScrollView style={{height: 0}}>{props.text}</ScrollView>
            {/*<View style={{ borderColor: "#efe4be", borderWidth: 1, borderRadius: 15, backgroundColor: "#90C6CA", maxWidth: width/1.2, marginBottom: 10, marginTop: 10, shadowOpacity: 0.3, shadowRadius: 10}}>
                <Button
                    onPress={() => {
                        setPopUp(!popUp)
                    }}
                    title="Learn More"
                    color="black"
                />
                </View>*/}
            <View style={{flexDirection: 'row'}}>
                {/* <TouchableHighlight onPress={() => {props.navigation.push('Markers')}} style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", maxWidth: width/1.2, marginBottom: 10, marginTop: 10, shadowOpacity: 0.3, shadowRadius: 10}}>
                        <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '20', alignSelf: "center", color: "white" }}>All Markers</Text>
                </TouchableHighlight> */}
                <TouchableHighlight onPress={() => {setPopUp(!popUp)}} style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", maxWidth: width/1.2, marginBottom: 10, marginTop: 10, marginLeft: 20, shadowOpacity: 0.3, shadowRadius: 10}}>
                        <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '20', alignSelf: "center", color: "white" }}>Learn More</Text>
                </TouchableHighlight>
            </View>
            {/* Pop-Up */}
            <Modal transparent={true} visible={popUp}>
                <View style={{backgroundColor: "#000000aa", flex: 1, alignContent: 'center'}}>
                    <View style={{display: 'flex', backgroundColor: "#efe4be", margin: 30, marginTop: 250, padding: 15, borderRadius: 10, width: width/1.15, maxHeight: height/2, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                        <ScrollView>{props.popUpText}</ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        {/*<View style={{ borderColor: "#efe4be", borderWidth: 1, borderRadius: 15, backgroundColor: "#90C6CA", justifyContent: 'center', maxWidth: width/2.7, marginBottom: 10, marginTop: 10, marginRight: 15, marginLeft: 5, shadowOpacity: 0.3, shadowRadius: 10}}>
                            <Button
                                onPress={() => {
                                    setPopUp(!popUp)
                                }}
                                title="More Pictures"
                                color="black"
                                accessibilityLabel="Learn more about this purple button"
                            />
                            </View>*/}
                        <TouchableHighlight onPress={() => {setPopUp(!popUp)}} style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", justifyContent: 'center', width: width/2.7, marginBottom: 10, marginTop: 10, marginRight: 10, marginLeft: 5, shadowOpacity: 0.3, shadowRadius: 10}}>
                            <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '19', alignSelf: "center", color: "white" }}>More Pictures</Text>
                        </TouchableHighlight>
                        {/*<View style={{ borderColor: "#efe4be", borderWidth: 1, borderRadius: 15, backgroundColor: "#90C6CA", justifyContent: 'center', maxWidth: width/2.7, marginBottom: 10, marginTop: 10, shadowOpacity: 0.3, shadowRadius: 10}}>
                            <Button
                                onPress={() => {
                                    setPopUp(!popUp)
                                    props.navigation.navigate('Marker' + (eval(props.num) + 1))
                                }}
                                title="Next Marker"
                                color="black"
                                accessibilityLabel="Learn more about this purple button"
                            />
                            </View>*/}
                        <TouchableHighlight onPress={() => {setPopUp(!popUp)
                            if (props.num == 24) {
                                alert('You have reached the end :)')
                            } else {
                                props.navigation.navigate('Marker' + (eval(props.num) + 1))}}
                            }
                            style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", justifyContent: 'center', width: width/2.7, marginBottom: 10, marginTop: 10, shadowOpacity: 0.3, shadowRadius: 10}}>
                            <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: '19', alignSelf: "center", color: "white" }}>Next Marker</Text>
                        </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}