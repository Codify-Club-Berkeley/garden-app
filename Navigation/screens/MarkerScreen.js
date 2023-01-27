import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView , TouchableHighlight} from 'react-native';
const { width, height } = Dimensions.get('screen');

//TODO: create more markers (make sure the photo and text correspond), make box highlight upon click
// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
//Inspo: https://www.google.com/search?rlz=1C1VDKB_enUS1038US1038&q=onstartShouldSetResponder+how+to+use&tbm=vid&sa=X&ved=2ahUKEwi3u87Mtd_8AhUlC0QIHdxSBBIQ0pQJegQIChAB&biw=1280&bih=601&dpr=1.5#fpstate=ive&vld=cid:a252efcf,vid:ru6KJ1bfZdg 
//list of different plants with their title, plant name, and image
const DATA = [
    {
        id: "1",
        title: "Marker 1 (Test)",
        plant: 'Valley Oak Tree',
        imge: "https://drive.google.com/drive/folders/1VgdO-ugHeXzY3M5lJIciYK5Sma_-O6Zi"
    },
    {
        id: "2",
        title: "Marker 2",
        plant: 'Yucca',
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    },
    {
        id: "3",
        title: "Marker 3",
        plant: "Jubaea chilensis",
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    
    },
    {
        id: "4",
        title: "Marker 4",
        plant: "Aloes",
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    },
    {
        id: "5",
        title: "Marker 5",
        plant: "California Natives",
        imge: "https://www.bhg.com/thmb/EYnd02FlY3OEOTeiQ7gq8npIjtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032070.jpg.rendition.largest-62b5190b7d514854b41520e361650138.jpg"
    },
    {
        id: "6",
        title: "Marker 6",
        plant: "Torrey and Hellskloof",
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
            renderItem={({item}) => {
              
                return <View style={styles.item} 
                onStartShouldSetResponder ={() => true}
                onResponderRelease={() => navigation.navigate('Home')}>
                    <Image
                        source= {{uri: item.imge}}
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
        fontSize: 16,
        color: "white",
      },
    });
    