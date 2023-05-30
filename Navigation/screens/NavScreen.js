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
                style={styles.bodyText}>This self-guided tour highlights some of the iconic plants in the collection.  <Text style={{fontWeight: 'bold'}}>As you walk, look for brass markers to pair with the app descriptions.</Text>
            </Text>     
            <Image source = {sampleMarker} style = {styles.markerPic}/>
            <Text 
                style={styles.bodyText}>For a deeper dive into our collection, our plant’s origins, and horticultural needs visit
            </Text>
            <View style = {styles.buttonText}>
            <TouchableOpacity
                style = {styles.button}
                onPress = {() => Linking.openURL("https://www.ruthbancroftgarden.org/garden//")}>
                <Text style = {styles.buttonText}> website </Text>
            </TouchableOpacity>
            </View>   
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    buttonText: {
        fontSize: "25",
        color: "white",
        padding: 10,
        paddingLeft: 80,
        paddingRight: 80,
        textAlign: 'center',
    },
    button: {
        borderRadius: 10,
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
  /* 
  For the button and rest of the text: 
              <Text 
                style={styles.bodyText}>For a deeper dive into our collection, our plant’s origins, and horticultural needs visit
            </Text>
            <View style = {styles.button}>
            <TouchableOpacity style = {styles.button} onPress={() => Linking.openURL("https://www.ruthbancroftgarden.org/garden//")}>
                <Text style={styles.buttonText}>{'here'}</Text>
            </TouchableOpacity>
            </View>   
*/