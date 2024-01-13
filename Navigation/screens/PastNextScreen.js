import { View, Text, Linking, StyleSheet, TouchableOpacity, Image} from 'react-native';
const BG_IMG= require('../images/thumbnail_images/M20.jpg');


export default function PastNextScreen({navigation}) {
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
            <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigation.navigate('EndScreen')}>
                <Text style = {styles.buttonText}> Map </Text>
            </TouchableOpacity>
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
    fontSize: 30,
    color: "white",
    padding: 10,
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
