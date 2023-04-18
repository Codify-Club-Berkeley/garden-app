import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/HomeScreen';
import Marker1 from 'MarkerPages/Marker1';
import Marker2 from 'MarkerPages/Marker2';

const Stack = createStackNavigator();

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

export default MainStackNavigator;