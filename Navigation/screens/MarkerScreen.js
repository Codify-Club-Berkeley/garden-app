import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, createStackNavigator, createAppContainer, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView , TouchableHighlight} from 'react-native';
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
        imge: require('../images/Marker_1_1.jpg'),
        whereTo: 'Marker1'
    },
    {
        id: "2",
        title: "Marker 2",
        plant: 'Yucca',
        imge: require('../images/Marker_1_2.jpg'),
        whereTo: 'Marker2'
    },
    {
        id: "3",
        title: "Marker 3",
        plant: "Jubaea chilensis",
        imge: require('../images/Marker_3_1.jpg')
    
    },
    {
        id: "4",
        title: "Marker 4",
        plant: "Aloes",
        imge: require('../images/Marker_4_1.jpg')
    },
    {
        id: "5",
        title: "Marker 5",
        plant: "California Natives",
        imge: require('../images/Marker_5_1.jpg')
    },
    {
        id: "6",
        title: "Marker 6",
        plant: "Torrey and Hellskloof",
        imge: require('../images/Marker_6_1.jpg')
    },
    {
      id: "7",
      title: "Marker 7",
      plant: "Manzanita and Melaleuca",
      imge: require('../images/Marker_7_1.jpg')
    },
    {
      id: "8",
      title: "Marker 8",
      plant: "Xanthorrhoea preissii",
      imge: require('../images/Marker_8_1.jpg')
    },
    {
      id: "9",
      title: "Marker 9",
      plant: "Dasylirion longissimum",
      imge: require('../images/Marker_9_1.jpg')
    },
    {
      id: "10",
      title: "Marker 10",
      plant: "Gasteria",
      imge: require('../images/Marker_10_1.jpg')
    },
    {
      id: "11",
      title: "Marker 11",
      plant: "Eucalyptus kitsoniana",
      imge: require('../images/Marker_11_1.jpg')
    },
    {
      id: "12",
      title: "Marker 12",
      plant: "Euphorbia rigida",
      imge: require('../images/Marker_12_1.jpg')
    },
    {
      id: "13",
      title: "Marker 13",
      plant: "Dykia, Mangave",
      imge: require('../images/Marker_13_1.jpg')
    },
    {
      id: "14",
      title: "Marker 14",
      plant: "Brahea, Euphorbia",
      imge: require('../images/Marker_14_1.jpg')
    },
    {
      id: "15",
      title: "Marker 15",
      imge: require('../images/Marker_15-_1.jpg')
    },
    {
      id: "16",
      title: "Marker 16",
      imge: require('../images/Marker_16-_1.jpg')
    },
    {
      id: "17",
      title: "Marker 17",
      imge: require('../images/Marker_17_2.jpg')
    },
    {
      id: "18",
      title: "Marker 18",
      imge: require('../images/Marker_18_1.jpg')
    },
    {
      id: "19",
      title: "Marker 19",
      imge: require('../images/Marker_19_1.jpg')
    },
    {
      id: "20",
      title: "Marker 20",
      imge: require('../images/Marker_20_1.jpg')
    },
    {
      id: "21",
      title: "Marker 21",
      imge: require('../images/Marker_21_1.jpg')
    },
    {
      id: "22",
      title: "Marker 22",
      imge: require('../images/Marker_22_1.jpg')
    },
    {
      id: "23",
      title: "Marker 23",
      imge: require('../images/Marker_23_1.jpg')
    },
    {
      id: "24",
      title: "Marker 24",
      imge: require('../images/Marker_24_1.jpg')
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
        //onResponderRelease={() => navigation.navigate('Marker1')}>
        <SafeAreaView style={styles.container}>
          <Image 
            source={{uri: BG_IMG}}
            style={StyleSheet.absoluteFillObject}
            blurRadius={25}
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
                onResponderRelease={() => navigation.navigate(item.whereTo)}> 
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
        fontSize: 16,
        color: "white",
      },
    });
    