import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

Text.defaultProps = {};
Text.defaultProps.maxFontSizeMultiplier = 1.7;

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
    <View
      style={{
        backgroundColor: "grey",
        maxHeight: height / 16,
        maxWidth: width / 6,
        alignSelf: "flex-end",
        marginRight: 10,
        marginTop: -50,
        borderRadius: 10,
      }}
    >
      <Text style={styles.paginationText}>
        {index + 1}/{total}
      </Text>
    </View>
  );
};

export default function Marker(props) {
  const [popUp, setPopUp] = useState(false);
  const [mapPopUp, setMapPopUp] = useState(false);

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Markers");
          }}
        >
          <Ionicons name="chevron-back-outline" size={20}>
            All Markers
          </Ionicons>
        </TouchableOpacity>
      ),
    });
  });

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            {/* images */}
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
                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: 30, alignSelf: "center", color: "white" }}>Marker {props.num}</Text>
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

            {/* Bottom Buttons */}
            <View style={{flexDirection: 'row'}}>
                {/* Learn More */}
                <TouchableHighlight onPress={() => {setPopUp(!popUp)}} style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", maxWidth: width/1.2, marginBottom: 10, marginTop: 10, marginLeft: 5, shadowOpacity: 0.3, shadowRadius: 10}}>
                        <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: 20, alignSelf: "center", color: "white" }}>Learn More</Text>
                </TouchableHighlight>
                {/* Next Marker Map Popup*/}
                <TouchableHighlight onPress={() => {lastMarker()}} style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", maxWidth: width/1.2, marginBottom: 10, marginTop: 10, marginLeft: 20, shadowOpacity: 0.3, shadowRadius: 10}}>
                        <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: 20, alignSelf: "center", color: "white" }}>Next Marker</Text>
                </TouchableHighlight>
            </View>

            {/* Learn More Pop-Up */}
            <Modal transparent={true} visible={popUp}>
                <View style={{backgroundColor: "#000000aa", flex: 1, alignContent: 'center'}}>
                    <View style={{display: 'flex', backgroundColor: "#efe4be", margin: 30, marginTop: 250, padding: 15, borderRadius: 10, width: width/1.15, maxHeight: height/2, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                        <ScrollView>{props.popUpText}</ScrollView>
                        <View style={{flexDirection: 'row'}}>
                            {/* More Pictures */}
                            <TouchableHighlight onPress={() => {setPopUp(!popUp)}} style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", justifyContent: 'center', width: width/2.7, marginBottom: 10, marginTop: 10, marginRight: 10, marginLeft: 5, shadowOpacity: 0.3, shadowRadius: 10}}>
                                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: 19, alignSelf: "center", color: "white" }}>More Pictures</Text>
                            </TouchableHighlight>
                            {/* Next Marker */}
                            <TouchableHighlight 
                                onPress={() => 
                                    {setPopUp(!popUp)
                                    lastMarker()}}
                                style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", justifyContent: 'center', width: width/2.7, marginBottom: 10, marginTop: 10, shadowOpacity: 0.3, shadowRadius: 10}}>
                                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: 19, alignSelf: "center", color: "white" }}>Next Marker</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Map Pop-Up */}
            <Modal transparent={true} visible={mapPopUp}>
                <View style={{backgroundColor: "#000000aa", flex: 1, alignContent: 'center'}}>
                    <View style={{display: 'flex', backgroundColor: "#efe4be", margin: 30, marginTop: 150, padding: 15, borderRadius: 10, width: width/1.15, height: height/1.6, maxHeight: height, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                        <ScrollView>
                            <View>{props.directions}</View>
                            <Image  source={props.map} style={styles.map}></Image>
                        </ScrollView>
                        <View style={{flexDirection: 'row'}}>
                            {/* Back */}
                            <TouchableHighlight onPress={() => {setMapPopUp(!mapPopUp)}} style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", justifyContent: 'center', width: width/2.7, marginBottom: 10, marginTop: 10, marginRight: 10, marginLeft: 5, shadowOpacity: 0.3, shadowRadius: 10}}>
                                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: 19, alignSelf: "center", color: "white" }}>Back</Text>
                            </TouchableHighlight>
                            {/* Next Marker */}
                            <TouchableHighlight onPress={() => {setMapPopUp(!mapPopUp)
                                nextMarker()}}
                                style={{ borderColor: "#efe4be", borderWidth: 5, borderRadius: 15, backgroundColor: "#90C6CA", justifyContent: 'center', width: width/2.7, marginBottom: 10, marginTop: 10, shadowOpacity: 0.3, shadowRadius: 10}}>
                                <Text style={{ padding: 10, fontFamily: "Times New Roman", fontSize: 19, alignSelf: "center", color: "white" }}>Proceed</Text>
                            </TouchableHighlight>
                        </View>
                        
                    </View>
                </View>
            </Modal>
        </View>
  );
  function nextMarker() {
    if (props.num == 24) {
      props.navigation.navigate("EndScreen");
      //alert('You have reached the end :)')
    } else {
      props.navigation.navigate("Marker " + (eval(props.num) + 1));
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
