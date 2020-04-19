import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const progress = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => navigation.navigate("Home"));
  }, []);

  return (
    <LottieView
      source={require("../assets/animations/cancel-or-error.json")}
      progress={progress}
    />
  );
};
