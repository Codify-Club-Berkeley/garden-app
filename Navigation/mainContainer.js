import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import MarkerScreen from './screens/MarkerScreen';
import TestMarker from './screens/MarkerPages/Marker1';
import Marker2 from './screens/MarkerPages/Marker2';

// Screen names

const HomeName = 'Home';
const MapName= 'Map';
const MarkerName= 'Markers';
const TestMarkerName = 'Marker1';
const Marker2Name = 'Marker2';   

const Tab = createBottomTabNavigator();
//initialRouteName specifies which screen will appear first
//route is where we're going 

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
                    else if (rn === TestMarkerName){
                        iconName=focused ? 'apps' : 'apps-outline'
                    }
                    else if (rn === Marker2Name){
                        iconName=focused ? 'apps' : 'apps-outline'
                    }
                    size = 30
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                
                headerStyle: {backgroundColor:"#90C6CA"},
                tabBarStyle: {backgroundColor: "#90C6CA", padding: 10, height: 90},
                tabBarLabelStyle: {fontSize: 12}
                // tabBarInactiveBackgroundColor: "#90C6CA",
                // tabBarActiveBackgroundColor: "#90C6CA"
            })}
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#efe4be',
                backgroundColor: 'red'
            }}
            >

            <Tab.Screen name={HomeName} component= {HomeScreen}/>
            <Tab.Screen name={MapName} component= {MapScreen}/>
            <Tab.Screen name={MarkerName} component= {MarkerScreen}/>
            <Tab.Screen name={TestMarkerName} component= {TestMarker}/>
            <Tab.Screen name={Marker2Name} component= {Marker2}/>
            </Tab.Navigator>
            
        </NavigationContainer>
    );

}