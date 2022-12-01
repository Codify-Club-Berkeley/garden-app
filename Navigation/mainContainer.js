import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import MarkerScreen from './screens/MarkerScreen';

// Screen names

const HomeName = 'Home';
const MapName= 'Map';
const MarkerName= 'Marker';

const Tab = createBottomTabNavigator();
//initialRouteName specifies which screen will appear first
//route is where we're going 

export default function mainContainer(){
    return(
        <NavigationContainer>
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
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: '#588D98',
                inactiveTintColor: 'grey',
                backgroundColor: 'red',
            }}
            >

            <Tab.Screen name={HomeName} component= {HomeScreen}/>
            <Tab.Screen name={MapName} component= {MapScreen}/>
            <Tab.Screen name={MarkerName} component= {MarkerScreen}/>


            </Tab.Navigator>
            
        </NavigationContainer>
    );
}