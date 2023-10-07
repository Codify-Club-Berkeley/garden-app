import * as React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Marker from "../Marker";

Text.defaultProps = {};
Text.defaultProps.maxFontSizeMultiplier = 2;

const markerImages = {
  1: [require('../../images/Marker_1_1.jpg'), require('../../images/Marker_1_2.jpg')],
  2: ['Marker_2_1.jpg', 'Marker_2_2.jpg'],
  3: ['Marker_3_1.jpg', 'Marker_3_2.jpg'],
  4: ['Marker_4_1.jpg', 'Marker_4_2.jpg'],
  5: ['Marker_5_1.jpg', 'Marker_5_2.jpg', 'Marker_5_3.jpg'],
  6: ['Marker_6_1.jpg', 'Marker_6_2.jpg'],
  7: ['Marker_7_1.jpg', 'Marker_7_2.jpg', 'Marker_7_3.jpg'],
  8: ['Marker_8_1.jpg', 'Marker_8_2.jpg'],
  9: ['Marker_9_1.jpg', 'Marker_9_2.jpg'],
  10: ['Marker_10_1.jpg', 'Marker_10_2.jpg'],
  11: ['Marker_11_1.jpg', 'Marker_11_2.jpg', 'Marker_11_3.jpg'],
  12: ['Marker_12_1.jpg', 'Marker_12_2.jpg', 'Marker_12_3.jpg', 'Marker_12_4.jpg'],
  13: ['Marker_13_1.jpg', 'Marker_13_2.jpg', 'Marker_13_3.jpg', 'Marker_13_4.jpg'],
  14: ['Marker_14_1.jpg', 'Marker_14_2.jpg', 'Marker_14_3.jpg', 'Marker_14_4.jpg'],
  15: ['Marker_15_1.jpg', 'Marker_15_2.jpg'],
  16: ['Marker_16_1.jpg', 'Marker_16_2.jpg', 'Marker_16_3.jpg'],
  17: ['Marker_17_1.jpg', 'Marker_17_2.jpg', 'Marker_17_3.jpg'],
  18: ['Marker_18_1.jpg', 'Marker_18_2.jpg', 'Marker_18_3.jpg', 'Marker_18_4.jpg'],
  19: ['Marker_19_1.jpg', 'Marker_19_2.jpg', 'Marker_19_3.jpg'],
  20: ['Marker_20_1.jpg', 'Marker_20_2.jpg'],
  21: ['Marker_21_1.jpg', 'Marker_21_2.jpg'],
  22: ['Marker_22_1.jpg', 'Marker_22_2.jpg', 'Marker_22_3.jpg', 'Marker_22_4.jpg'],
  23: ['Marker_23_1.jpg', 'Marker_23_2.jpg', 'Marker_23_3.jpg'],
  24: ['Marker_24_1.jpg', 'Marker_24_2.jpg'],
}

export default markerImages;
