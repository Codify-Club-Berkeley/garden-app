import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import MarkerScreen from './screens/MarkerScreen';
import TestMarker from './screens/MarkerPages/Marker1';
import MarkerX from './screens/MarkerPages/Marker7';
import Marker23 from './screens/MarkerPages/Marker23';
import Marker22 from './screens/MarkerPages/Marker22';
import Marker21 from './screens/MarkerPages/Marker21';

// Screen names

const HomeName = 'Home';
const MapName= 'Map';
const MarkerName= 'Markers';
const TestMarkerName = 'Marker1';
const MarkerXName = 'MarkerX';

const Tab = createBottomTabNavigator();
//initialRouteName specifies which screen will appear first
//route is where we're going 

const Stack = createStackNavigator();

function MainStackNavigator() {
    const markers = [];
    for (let i = 1; i <= 24; i++) {
      const name = "Marker" + i;
      markers.push(name);
    }
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Marker5" component={Marker22} />
          <Stack.Screen name="Marker2" component={Marker21} />
          <Stack.Screen name="Marker3" component={Marker23} />
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
                    else if (rn === TestMarkerName){
                        iconName=focused ? 'apps' : 'apps-outline'
                    }
                    else if (rn === MarkerXName){
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
            <Tab.Screen name={TestMarkerName} component= {MainStackNavigator}/>
            <Tab.Screen name={MarkerXName} component= {MarkerX}/>
            </Tab.Navigator>
        </NavigationContainer>
    );

}