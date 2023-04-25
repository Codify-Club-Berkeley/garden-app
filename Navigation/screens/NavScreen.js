import * as React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Button, Alert, Pressable, Linking, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const logoImage= require('../images/Logo.png');
const sampleMarker = require('../images/SampleMarker.jpg')

export default function NavScreen({ navigation }) {
    return (
        <ScrollView style = {styles.scrollStyle}>
            <Image source = {logoImage} style = {styles.container}/>
            <Text
                onPress={() => alert('This is the "worm" screen.')}
                style={styles.titleText}>Welcome to the Garden!
            </Text>           
            <Text 
                style={styles.bodyText}>This self-guided tour highlights some of the iconic plants in the collection.  <Text style={{fontWeight: 'bold'}}>As you walk, look for brass markers to pair with the app descriptions.</Text>
            </Text>     
            <Image source = {sampleMarker} style = {styles.markerPic}/>
            <Text 
                style={styles.bodyText}>For a deeper dive into our collection, our plant’s origins, and horticultural needs visit
            </Text>
            <View style = {styles.button}>
            <TouchableOpacity style = {styles.button} onPress={() => Linking.openURL("https://www.ruthbancroftgarden.org/garden//")}>
                <Text style={styles.buttonText}>{'here'}</Text>
            </TouchableOpacity>
            </View>   
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    buttonText: {

        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'white',
        paddingBottom: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 12,
        // paddingHorizontal: 12,
        padding: 12,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: "#90C6CA",
    },
    scrollStyle: {
        flex: 1,
        backgroundColor: "#efe4be",
        paddingTop: 25,
        paddingBottom: 25,  
     },
    container: {
        resizeMode: 'contain',
        flex: 0.35,
        height:  180, // percentile heights was giving problems
        width: '100%',
      justifyContent: 'center',
    },
    markerPic: {
        resizeMode: 'contain',
        //flex: 0.4,
        height:  200,
        width: '100%',
    },
    titleText: {
        paddingTop: 30,
        fontSize: 30, 
        fontWeight: 'bold',  
        textAlign: 'center',
    },
    bodyText: {
        paddingLeft: 30,
        paddingRight: 20,
        paddingBottom: 40,
        paddingTop: 40,
        fontSize: 19,
        lineHeight: 40,
    },
  });