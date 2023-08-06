import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Button, Alert, Pressable, Linking, TouchableOpacity, ImageBackground} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


const logoImage= require('../images/Logo.png');
const sampleMarker = require('../images/SampleMarker.jpg')
const HOME_BG_IMG= require('../images/home_screen_blur.png');
const HOME2_BG_IMG= require('../images/navScreenBG.png');

export default function NavScreen({ navigation }) {
    return (
        <ImageBackground blurRadius={3} style = {styles.bgImg} source={HOME2_BG_IMG} resizeMode="cover">
        <ScrollView style = {styles.scrollStyle}>
            <LinearGradient
                    colors={['transparent',"#efe4be"]}
                    end = {{x:0.5, y: 0.12}}
                    style={styles.linearGradient}
                />
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
                    <Text style = {styles.buttonText}> Website </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => navigation.navigate('Markers')}>
                    <Text style = {styles.buttonText}> Go to Tour </Text>
                </TouchableOpacity>
            </View>   
        </ScrollView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        width: '100%', 
        height: '120%',
    },
    buttonText: {
        fontSize: 25,
        color: "white",
        padding: 10,
        // paddingLeft: 80,
        // paddingRight: 80,
        textAlign: 'center',
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#90C6CA",
        marginBottom: 100,
    },
    scrollStyle: {
        //flex: 1,
        //backgroundColor: "#efe4be",
        paddingTop: 25,
        paddingBottom: 25,  
     },
    container: {
        resizeMode: 'contain',
        //flex: 0.35,
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
        paddingBottom: 20,
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