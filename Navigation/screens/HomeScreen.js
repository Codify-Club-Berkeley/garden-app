import * as React from 'react';
import { View, Text, Linking, ScrollView, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const logoImage= require('../images/Logo.png');
const HOME_BG_IMG= require('../images/home_screen_blur.png');
const HOME2_BG_IMG= require('../images/thumbnail_images/M22.jpg');
space = ' ';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView>
<View style = {styles.scrollStyle}>
            <ImageBackground blurRadius={12} style = {styles.bgImg} source={HOME2_BG_IMG} resizeMode="cover">
            <LinearGradient
                colors={['transparent',"#efe4be"]}
                end = {{x:0.5, y: 0.35}}
               //locations={[0.1, 0.7, 0.2]}
                style={styles.linearGradient}
            />
            <View /> 
            <View /> 
            <Image source = {logoImage} style = {styles.container}/>
            <View style={styles.addInfo}>
                <View style={styles.titleblock}>
                    <Text style={styles.titleText}>Welcome to the Garden</Text>
                </View>
                    <Text
                        style={styles.bodyText}>
                        This self-guided tour will offer an introduction to some of the iconic plants of the Garden.
                    </Text>
                <Text
                    style= {styles.learnMoreText}>
                    To learn more about Ruth herself:{space}
                    <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL('https://www.ruthbancroftgarden.org/ruth-bancroft/')}>
                        click here
                    </Text>
                </Text>
                <Text
                    style= {styles.learnMoreText}>
                    To learn about our our mission, collection and programs: {space}
                    <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL('https://www.ruthbancroftgarden.org/')}>
                        click here
                    </Text>
                </Text>
                <View style={styles.buttonText}>
                </View>
                <View style={styles.addInfo}>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {()=>navigation.navigate("Guide")}>
                    <Text style = {styles.buttonText}> Go to Guide </Text>
                </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>   
        </View>
        </ScrollView>
        
    );
}



const styles = StyleSheet.create({
    addInfo: {
       // flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: "efe4be"
    },
    bgImg: {
        // paddingTop: 10, // comment out these for dif formatting
        // paddingBottom: 100,
        // backgroundColor: 'efe4be'
    },
    linearGradient: {
        position: 'absolute',
        width: '100%', 
        height: '110%',
    },
    button: {
        backgroundColor: "#90C6CA",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 25,
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
        shadowOpacity: 0.7,
        shadowOffset: {height: 1, width: 0}        
    },
    container: {
        resizeMode: 'contain',
       // flex: 0.35,
        height:  185, // percentile heights was giving problems
        paddingTop: 10,
        width: '100%',
        justifyContent: 'center',        
        //elevation: 6,
        shadowRadius: 5,
        marginTop: 15,
    },
    bodyText: {
        marginTop: 10,
        paddingLeft: 30,
        paddingRight: 20,
        paddingTop: 30,
        fontSize: 19,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        width: "100%",
        //color: "#e8fcfa"
    },
    scrollStyle: {
       // flex: 1,
        backgroundColor: "#efe4be",
        //paddingBottom: 100,  
        //paddingTop: 15,
     },
    learnMoreText: {
        paddingLeft: 30,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 10,
        fontSize: 18,
        //color: 'red',
        lineHeight: 30,
        width: "100%",
        //color: "#d6e9f0"

    },
})
