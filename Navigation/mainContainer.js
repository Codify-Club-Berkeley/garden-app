import { NavigationContainer, DefaultTheme, StackActions } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import NavScreen from './screens/NavScreen';
import MapScreen from './screens/MapScreen';
import MarkerScreen from './screens/MarkerScreen';

import * as Markers from './screens/MarkerExport';
import EndScreen from './screens/EndScreen';
import PastNextScreen from './screens/PastNextScreen';

// Screen names show on the top

const HomeName = 'Home Navigation';
const NavName = 'Guide';
const MapName = 'Map';
const MarkerName = 'Markers';
const EndName = 'EndScreen';

const Tab = createBottomTabNavigator();
//initialRouteName specifies which screen will appear first
//route is where we're going 

const Stack = createStackNavigator();

const navTheme = {
    ... DefaultTheme, 
    primary: 'blue'
}

function MainStackNavigator() {
    const markers = [];
    let i = 1;
    for (let marker in Markers) {
        const name = "Marker " + i;
        markers.push([name, Markers[marker]]);
        i = i + 1;
    }
    return (
      //<NavigationContainer independent={true} theme={navTheme} screenOptions={headerStyle={backgroundColor:"#90C6CA"}}>
        <Stack.Navigator initialRouteName='./screens/MarkerScreen' screenOptions={() => ({headerStyle: {backgroundColor:"#90C6CA"},
                    tabBarStyle: {backgroundColor: "#90C6CA", padding: 10, height: 90},
                    tabBarLabelStyle: {fontSize: 12}})}>
            <Stack.Screen name="Markers" component={MarkerScreen}/>
            {markers.map((name) => (
                <Stack.Screen name={name[0]} component={name[1]} key={name[0]}/>
            ))}
            <Stack.Screen name= "EndScreen" component = {EndScreen}/>
            <Stack.Screen name = "PastNextScreen" component = {PastNextScreen}/>
            <Stack.Screen name = "MapScreen" component = {MapScreen}/>
        </Stack.Navigator>
      //</NavigationContainer>
    );
  }
  
  function MiniStackNavigator() {
    return(
        //<NavigationContainer independent={true} theme={navTheme} screenOptions={headerStyle={backgroundColor:"#90C6CA"}}>
            <Stack.Navigator initialRouteName='./screens/HomeScreen' screenOptions={() => ({headerStyle: {backgroundColor:"#90C6CA"}, headerShown: false,
                tabBarStyle: {backgroundColor: "#90C6CA", padding: 10, height: 90},
                tabBarLabelStyle: {fontSize: 12}})}>
            <Stack.Screen name = "HomeScreen" component ={HomeScreen}/>
            <Stack.Screen name = "NavScreen" component = {NavScreen}/>
            <Stack.Screen name={"MarkerFromNav"} component= {MainStackNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    //</NavigationContainer>
    )
  } 

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName={HomeName}
                screenOptions={
                    ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === HomeName){
                            iconName=focused ? 'home' : 'home-outline'
                        }
                        else if (rn === MapName){
                            iconName=focused ? 'compass' : 'compass-outline'
                        }
                        else if (rn === NavName){
                            iconName=focused ? 'map' : 'map-outline'
                        }
                        else if (rn === MarkerName){
                            iconName=focused ? 'list' : 'list-outline'
                        }
                        size = 30
                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "#efe4be",
                    tabBarStyle: [{
                        "display": "flex"
                    },
                        null
                    ],
                    headerStyle: {backgroundColor:"#90C6CA"}, //original color: #90C6CA
                    tabBarStyle: {backgroundColor: "#90C6CA", padding: 10, height: 90},
                    tabBarLabelStyle: {display: "none"}
                })}
            >
                <Tab.Screen name={HomeName} component= {MiniStackNavigator}/>
                <Tab.Screen name={MapName} component= {MapScreen}/>
                <Tab.Screen name={MarkerName} component= {MainStackNavigator} options={{headerShown: false}}/>
            </Tab.Navigator>

        </NavigationContainer>
    );
}