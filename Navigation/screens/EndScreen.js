//Change Marker.js navigation of marker 24 after creating this page!

import * as React from 'react';
import { View, Text, Button, Linking, StyleSheet, TouchableOpacity, Image} from 'react-native';
const logoImage= require('../images/thumbnail_images/M19.jpg');
import { ScrollView } from 'react-native-gesture-handler'; //note: use M19 for image
import { LinearGradient } from 'expo-linear-gradient';
//const chosenImage= require('../images/thumbnail_images/M19.jpg');

export default function EndScreen({ navigation }) {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            <Image 
                source={{uri: BG_IMG}}
                style={StyleSheet.absoluteFillObject}
                blurRadius={25}
                >
            </Image>
                <Text
                    style={styles.titleText}> We hope you enjoyed this self-guided tour. 
                </Text>
                <Text
                style= {styles.learnMoreText}>
                    {'\t'}Please consider becoming a member. Memberships help support our Garden and allow us to uphold our mission of education and preservation. We appreciate the valuable support our Members provide and are eager to continue to share Ruth’s Garden with our growing community!
                </Text>
                <View style={styles.buttonText}>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => Linking.openURL("https://www.ruthbancroftgarden.org/membership/")}>
                    <Text style = {styles.buttonText}> Join </Text>
                </TouchableOpacity>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#90C6CA",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: "25",
        color: "white",
        padding: 10,
    },
    titleText: {
        paddingTop: 30,
        fontSize: 20, 
        padding: 10,
        fontWeight: 'bold',  
        textAlign: 'center',
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
        fontSize: 19,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    scrollStyle: {
        flex: 1,
        backgroundColor: "#efe4be",
        paddingTop: 25,
        paddingBottom: 25,  
     },
    learnMoreText: {
        paddingLeft: 30,
        paddingRight: 20,
        paddingBottom: 10,
        fontSize: 16,
        //color: 'red',
        lineHeight: 30,
    },
})
