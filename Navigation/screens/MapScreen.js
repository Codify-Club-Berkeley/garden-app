import React from 'react';
import { View, Image, Dimensions} from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const map = require('../images/map/Map.png');
const mapStyle = {
  resizeMode: "contain",
  height: height * 0.7, 
  width: width,
  borderRadius: 0,
};

export default function MapScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FFFFFF" }}>                    
        <ReactNativeZoomableView maxZoom={8} minZoom={1} contentWidth={width} contentHeight={height * 0.7}>
          <Image source={map} style={mapStyle}></Image>
        </ReactNativeZoomableView>
      </View>
    );
}