import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Modal, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MarkerStyle } from './MarkerStyle';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

Text.defaultProps = {}
Text.defaultProps.maxFontSizeMultiplier = 1.7

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
        resizeMode: "stretch",
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
      },
      map: {
        resizeMode: "stretch",
        height: height*0.5, 
        width: width * 0.8,
        borderRadius: 10,
      }
  })



const renderPagination = (index, total, context) => {
    return (
        <View style={MarkerStyle.pagination}>
            <Text style={MarkerStyle.paginationText}>{index + 1}/{total}</Text>
        </View>
    )
  }

export default function Marker(props) {
    const [popUp, setPopUp] = useState(false);
    const [mapPopUp, setMapPopUp] = useState(false);
    

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => {props.navigation.navigate("Markers")}}>
                    <Ionicons name="chevron-back-outline" size={20}>All Markers</Ionicons>
                </TouchableOpacity>
            )
        });
    })

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            {/* images */}
            <Swiper
            loop={false}
            index={0}
            renderPagination={renderPagination}
            // paginationStyle={{ bottom: 28 }}
            dotColor={"#808080"}
            activeDotColor={"#efe4be"}>
            {props.images.map((image, index) => (
                <Image
                key={index}
                style={MarkerStyle.image}
                source={image}
                />
            ))}
            </Swiper>
            {/* Marker Heading */}
            <View style={MarkerStyle.header}>
                <Text style={MarkerStyle.headerText}>Marker {props.num}</Text>
            </View>
            {/* Text */}
            <ScrollView style={{height: 0}}>{props.text}</ScrollView>

            {/* Bottom Buttons */}
            <View style={{flexDirection: 'row'}}>
                {/* Learn More */}
                <TouchableHighlight onPress={() => {prevMarker()}} style={MarkerStyle.button}>
                        <Text style={MarkerStyle.buttonText}>Prev Marker</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {setPopUp(!popUp)}} style={MarkerStyle.button}>
                        <Text style={MarkerStyle.buttonText}>Learn More</Text>
                </TouchableHighlight>
                {/* Next Marker Map Popup*/}
                <TouchableHighlight onPress={() => {lastMarker()}} style={MarkerStyle.button}>
                        <Text style={MarkerStyle.buttonText}>Next Marker</Text>
                </TouchableHighlight>
            </View>

            {/* Learn More Pop-Up */}
            <Modal transparent={true} visible={popUp}>
                <View style={{backgroundColor: "#000000aa", flex: 1, alignContent: 'center'}}>
                    <View style={MarkerStyle.modal}>
                        <ScrollView>{props.popUpText}</ScrollView>
                        <View style={{flexDirection: 'row'}}>
                            {/* More Pictures */}
                            <TouchableHighlight onPress={() => {setPopUp(!popUp)}} style={MarkerStyle.button}>
                                <Text style={MarkerStyle.buttonText}>More Pictures</Text>
                            </TouchableHighlight>
                            {/* Next Marker */}
                            <TouchableHighlight 
                                onPress={() => 
                                    {setPopUp(!popUp)
                                    lastMarker()}}
                                style={MarkerStyle.button}>
                                <Text style={MarkerStyle.buttonText}>Next Marker</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Map Pop-Up */}
            <Modal transparent={true} visible={mapPopUp}>
                <View style={{backgroundColor: "#000000aa", flex: 1, alignContent: 'center'}}>
                    <View style={MarkerStyle.modal}>
                        <ScrollView>
                            <View>{props.directions}</View>
                            <Image  source={props.map} style={styles.map}></Image>
                        </ScrollView>
                        <View style={{flexDirection: 'row'}}>
                            {/* Back */}
                            <TouchableHighlight onPress={() => {setMapPopUp(!mapPopUp)}} style={MarkerStyle.button}>
                                <Text style={MarkerStyle.buttonText}>Back</Text>
                            </TouchableHighlight>
                            {/* Next Marker */}
                            <TouchableHighlight onPress={() => {setMapPopUp(!mapPopUp)
                                nextMarker()}}
                                style={MarkerStyle.button}>
                                <Text style={MarkerStyle.buttonText}>Proceed</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );

    function prevMarker() {
        if (props.num == 1) {
            props.navigation.navigate('Markers')
         } else {
             props.navigation.navigate('Marker ' + (eval(props.num) - 1))
         }
    }

    function nextMarker() {
        if (props.num == 24) {
           props.navigation.navigate('PastNextScreen')
        } else {
            props.navigation.navigate('Marker ' + (eval(props.num) + 1))
        }
    }

    function lastMarker() {
        if (props.num == 24) {
            nextMarker();
        } else {
            setMapPopUp(!mapPopUp);
        }
    }
}