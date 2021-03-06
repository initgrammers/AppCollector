import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import BarCodeScanner from "./src/screens/BarCodeScanner";
import { Provider } from "react-redux";
import store from "./src/redux";
const Stack = createStackNavigator();
const StackModal = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator mode={"modal"}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scanner" component={BarCodeScanner} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
