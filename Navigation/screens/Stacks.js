import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Marker1 from './screens/MarkerPages/Marker1';
import Marker2 from './screens/MarkerPages/Marker2';
import Marker3 from './screens/MarkerPages/Marker3';
import Marker4 from './screens/MarkerPages/Marker4';
import Marker5 from './screens/MarkerPages/Marker5';

const MarkerStack = createStackNavigator();

function MarkerStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <MarkerStack.Screen name="Marker1" component={Marker1} />
        <MarkerStack.Screen name="Marker2" component={Marker2} />
        <MarkerStack.Screen name="Marker3" component={Marker3} />
        <MarkerStack.Screen name="Marker4" component={Marker4} />
        <MarkerStack.Screen name="Marker5" component={Marker5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MarkerStackNavigator;