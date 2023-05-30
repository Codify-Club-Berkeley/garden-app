import { NavigationContainer, DefaultTheme, StackActions } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import NavScreen from './screens/NavScreen';
import MapScreen from './screens/MapScreen';
import MarkerScreen from './screens/MarkerScreen';

import * as Markers from './screens/MarkerExport';
import EndScreen from './screens/EndScreen';

// Screen names

const HomeName = 'Home';
const NavName = 'Guide';
const MapName= 'Map';
const MarkerName= 'Markers';
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
        const name = "Marker" + i;
        markers.push([name, Markers[marker]]);
        i = i + 1;
    }
    return (
      <NavigationContainer independent={true} theme={navTheme} screenOptions={headerStyle={backgroundColor:"#90C6CA"}}>
        <Stack.Navigator initialRouteName='./screens/MarkerScreen' headerMode="none">
            <Stack.Screen name="Markers" component={MarkerScreen}/>
            {markers.map((name) => (
                <Stack.Screen name={name[0]} component={name[1]} />
            ))}
            <Stack.Screen name= "EndScreen" component = {EndScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

const MyTheme = {
    ... DefaultTheme,
    backgroundColor: "blue"
}

export default function mainContainer(){
    return(
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator initialRouteName={HomeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === HomeName){
                        iconName=focused ? 'home' : 'home-outline'
                    }
                    else if (rn === MapName){
                        iconName=focused ? 'map' : 'map-outline'
                    }
                    else if (rn === MarkerName){
                        iconName=focused ? 'apps' : 'apps-outline'
                    }
                    else if (rn == NavName){
                        iconName= focused ? 'compass' : 'compass-outline'
                    }
                    size = 30
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                
                headerStyle: {backgroundColor:"#90C6CA"},
                tabBarStyle: {backgroundColor: "#90C6CA", padding: 10, height: 90},
                tabBarLabelStyle: {fontSize: 12}
            })}
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#efe4be',
                backgroundColor: 'red'
            }}
            >
            
            <Tab.Screen name={HomeName} component= {HomeScreen}/>
            <Tab.Screen name={NavName} component= {NavScreen}/>
            <Tab.Screen name={MarkerName} component= {MainStackNavigator}/>
            </Tab.Navigator>

        </NavigationContainer>
    );

}