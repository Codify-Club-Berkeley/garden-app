import * as React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Marker from "../Marker";

Text.defaultProps = {};
Text.defaultProps.maxFontSizeMultiplier = 2;

const images = [
  require("../../images/Marker_1_1.jpg"),
  require("../../images/Marker_1_2.jpg"),
];

const markerTextStyle = {
  text: {
      fontWeight: "bold", 
      fontStyle: "italic", 
      fontSize: 20
  }
};

export default markerTextStyle;
