import * as React from 'react';
import { View, Text, Button, Linking, StyleSheet, TouchableOpacity, Image} from 'react-native';
const logoImage= require('../images/Logo.png');
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style = {styles.scrollStyle}>
            <Image source = {logoImage} style = {styles.container}/>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
                <View style={styles.titleblock}>
                    <Text style={styles.titleText}>Welcome to the Garden!</Text>
                </View>
                <Text
                    style={styles.bodyText}>
                        The Garden’s mission is to preserve, promote, and enhance Ruth Bancroft’s world-class collection of water-conserving plants displayed in her exceptionally designed garden, for the education, inspiration, and enjoyment of the public.
                </Text>
                <Text
                style= {styles.learnMoreText}>
                To learn more about our history collection and organizational offerings please visit our website below.
                </Text>
                <View style={styles.buttonText}>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => Linking.openURL("https://www.ruthbancroftgarden.org/garden//")}>
                    <Text style = {styles.buttonText}> Website </Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
        padding: 10,
        fontSize: 30, 
        fontWeight: 'bold',  
        textAlign: 'center',
        
    },
    titleblock: {
        marginTop: '5%',
        borderRadius: "20px",
        backgroundColor: "#90C6CA",
        shadowOpacity: 0.9,
        shadowOffset: {height: 0, width: 1}        
    },
    container: {
        resizeMode: 'contain',
        flex: 0.35,
        height:  180, // percentile heights was giving problems
        width: '100%',
      justifyContent: 'center',
    },
    bodyText: {
        marginTop: 10,
        paddingLeft: 30,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 30,
        fontSize: 19,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        width: "100%"
    },
    scrollStyle: {
        flex: 1,
        backgroundColor: "#efe4be",
        paddingTop: 25,
        paddingBottom: 50,  
     },
    learnMoreText: {
        paddingLeft: 30,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 16,
        //color: 'red',
        lineHeight: 30,
        width: "100%"
    },
})
