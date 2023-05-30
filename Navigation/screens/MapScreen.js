import * as React from 'react';
import { View, Text, MapView} from 'react-native';
import { Overlay} from 'react-native-maps';

export default function MapScreen({ navigation }) {
    return (
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Overlay 
            image="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
            bounds={[
                [40.712216, -74.22655], 
                [40.773941, -74.12544]
            ]}
        />
    </MapView>
    );
}