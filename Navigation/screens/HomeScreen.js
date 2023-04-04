import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const logoImage= require('../images/Logo.png');

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#efe4be" }}>
            <Image source = {logoImage} style = {styles.container}/>
            <Text
                onPress={() => alert('This is the "worm" screen.')}
                style={styles.titleText}>Welcome to the Garden
            </Text>           
            <Text 
            style={styles.bodyText}>The Garden’s mission is to preserve, promote, and enhance Ruth Bancroft’s world-class collection of water-conserving plants displayed in her exceptionally designed garden, for the education, inspiration, and enjoyment of the public. To learn more about our history collection and organizational offerings please visit our website.
            </Text>     
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        resizeMode: 'contain',
        flex: 0.5,
        height:  '100%',
        width: '100%',

      justifyContent: 'center',
    },
    titleText: {
        padding: 20,
        fontSize: 30, 
        fontWeight: 'bold',  
        textAlign: 'center',
    },
    bodyText: {
        padding: 15,
        fontSize: 20,
    },
  });