import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');

// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
//list of different plants with their title, plant name, and image
const DATA = [
    {
        id: "1",
        title: "TestMarker",
        plant: 'valley oak tree',
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    },
    {
        id: "2",
        title: "Marker 2",
        plant: 'joy',
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    },
    {
        id: "3",
        title: "Marker 3",
        plant: "happy",
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    
    },
    {
        id: "4",
        title: "Marker 4",
        plant: "hmm",
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    },
    {
        id: "5",
        title: "Marker 5",
        plant: "fishy",
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    },
    {
        id: "6",
        title: "Marker 6",
        plant: "happy",
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    },
]
//background image that's blurred later on
const BG_IMG = 'https://cdn.pixabay.com/photo/2013/07/02/22/20/bouquet-142876__340.jpg'

const SPACING = 20;
const AVATAR_SIZE = 70;
  
export default function MarkerScreen ({navigation}) {
      return (
        //first <Image> is the markerscreen's background
        //second is the display of the plant image from DATA along with the title and plant 
        <SafeAreaView style={styles.container}>
          <Image 
            source= {{uri: BG_IMG}}
            style={StyleSheet.absoluteFillObject}
            blurRadius={50}
            >
          </Image>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            contentContainerStyle={{
                padding: SPACING,
            }}
            renderItem={({item, index}) => {
                return <View style={styles.item} onStartShouldSetResponder={() => navigation.navigate('TestMarker')}>
                    <Image
                        source= {item.imge}
                        style={styles.imge}
                        />

                    <View style={styles.txtbox} > 
                        <Text style={styles.title} >{item.title}</Text>
                        <Text style={styles.plant}>{item.plant}</Text>

                    </View> 
                </View>
            }}
          />
        </SafeAreaView>
      );
    }
    
    //styling of various parts of each component

    const styles = StyleSheet.create({
      txtbox: {
        flex: 1,
        justifyContent: 'center',
      },
      imge: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE,
        marginRight: SPACING/2
      },
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: 'rgba(88, 141, 152, .9)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        flexDirection: 'row', 
        padding: SPACING,
        marginBottom: SPACING,
        borderRadius: 12,
      },
      title: {
        fontSize: 25,
        color: "white",
        justifyContent: 'center',
        fontWeight: "bold",
      },
      plant: {
        fontSize: 15,
        color: "white",
      },
    });
    