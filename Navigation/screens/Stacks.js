import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Marker1 from './screens/MarkerPages/Marker1';
import Marker2 from './screens/MarkerPages/Marker2';
import Marker3 from './screens/MarkerPages/Marker3';
import Marker4 from './screens/MarkerPages/Marker4';
import Marker5 from './screens/MarkerPages/Marker5';
import Home from '../screens/HomeScreen';

const MarkerStack = createStackNavigator();

function MainStackNavigator() {
  const markers = [];
  for (let i = 1; i <= 24; i++) {
    const name = "Marker" + i;
    markers.push(name);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Marker1" component={Marker1} />
        <Stack.Screen name="Marker2" component={Marker2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MarkerStackNavigator;