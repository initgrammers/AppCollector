import React from "react";
import Constants from "expo-constants";
import { View } from "react-native";
const statusBarHeight = Constants.statusBarHeight;

export default (props) => {
  return <View style={{ flex: 1, ...props.style }}>{props.children}</View>;
};
