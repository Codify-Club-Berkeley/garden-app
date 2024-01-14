import React, {useEffect, useState} from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity, Image, Modal, Dimensions} from 'react-native';
const BG_IMG= require('../images/thumbnail_images/M20.jpg');
const map = require('../../Navigation/images/map/mapToExit.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default function PastNextScreen({navigation}) {
    const [mapPopUp, setMapPopUp] = useState(false);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be"}}>
        <Image 
            source={BG_IMG}
            style={StyleSheet.absoluteFillObject}
            blurRadius={15}
            >
        </Image>
            <View style = {styles.boxRound}>
                <Text
                style= {styles.learnMoreText}>
                    {'\t'}You have reached the end of the self-guided tour, but not the adventure of finding plants that leave you amazed by their beauty and adaptability. We encourage you to continue your stroll, then follow the map to the exit and visit us again!
                </Text>
            </View>
            <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.button} onPress = {() => setMapPopUp(true)}>
                    <Text style = {styles.buttonText}> Map to Exit </Text>
            </TouchableOpacity>
            <Modal transparent={true} visible={mapPopUp}>
                <View style={styles.outerPopUpStyle}>
                    <View style = {styles.popUpStyle}>
                        <Image  source={map} style={styles.map}></Image>
                        <View style = {{marginHorizontal: width/3}}>
                            <TouchableOpacity style = {styles.button} onPress = {() => setMapPopUp(!mapPopUp)}>
                                <Text style = {styles.buttonText}> Close </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigation.navigate('EndScreen')}>
                <Text style = {styles.buttonText}> Next </Text>
            </TouchableOpacity>
        </View>
        </View>
);
}

const styles = StyleSheet.create({
buttonContainer: {
    flexDirection: 'row',
},
outerPopUpStyle: {
    backgroundColor: "#000000aa", 
    flex: 1, 
    alignContent: 'center', 
    display: 'flex', 
    justifyContent: 'center'
},
popUpStyle: {
    backgroundColor: "#efe4be", 
    paddingVertical: 20, 
    marginHorizontal: 17, 
    borderRadius: 10
},
map: {
    resizeMode: "stretch",
    height: height*0.5, 
    width: width * 0.8,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 10,
  },
button: {
    backgroundColor: "#90C6CA",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.75,
    elevation: 6,
    shadowRadius: 10 ,
    shadowOffset : { width: 1, height: 6},
    margin: 8,
},
buttonText: {
    fontSize: 27,
    color: "white",
    padding: 10,
    textAlign: 'center',
},
boxRound: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#efe4be",
    borderRadius: 15,
    width: '95%',
    marginBottom: 20,
},
container: {
    resizeMode: 'contain',
    flex: 0.35,
    height:  180, // percentile heights was giving problems
    width: '100%',
  justifyContent: 'center',
},
bodyText: {
    paddingLeft: 30,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 40,
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'justify'
},
learnMoreText: {
    paddingLeft: 30,
    paddingRight: 20,
    paddingBottom: 10,
    fontSize: 16,
    lineHeight: 45,
},
})
