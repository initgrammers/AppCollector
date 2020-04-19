import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import firebase from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import SafeAreaView from "../components/SafeAreaView";
import Success from "../components/Success";
import Error from "../components/Error";

export default () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [status, setStatus] = useState();

  const { price, normalPassenger, specialPassenger } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    const addMessage = firebase.functions().httpsCallable("addTickets");
    addMessage({
      cooperativeId: "eFOjcfXwNiD7CU5eufGW",
      unitId: "uzUVSMA2oys5Mlc3lqIM",
      qrCode: data,
      price,
      normalPassenger,
      specialPassenger,
    })
      .then(({ data }) => {
        console.log(data);
        const { type } = data;
        if (type === "error") setStatus("error");
        if (type === "success") setStatus("success");
        dispatch({ type: "RESET" });
      })
      .catch((error) => alert("Ocurrio un error :("));
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{ ...StyleSheet.absoluteFillObject }}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
        <View style={{ height: 200, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
          <View style={{ width: 200 }}>
            {status === "success" && <Success />}
            {status === "error" && <Error />}
            <View
              style={{
                position: "absolute",
                left: -3,
                top: -3,
                borderTopWidth: 3,
                borderLeftWidth: 3,
                borderColor: "white",
                width: 20,
                height: 20,
                zIndex: 9999,
              }}
            />
            <View
              style={{
                position: "absolute",
                right: -3,
                top: -3,
                borderTopWidth: 3,
                borderRightWidth: 3,
                borderColor: "white",
                width: 20,
                height: 20,
                zIndex: 9999,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: -3,
                left: -3,
                borderBottomWidth: 3,
                borderLeftWidth: 3,
                borderColor: "white",
                width: 20,
                height: 20,
                zIndex: 9999,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: -3,
                right: -3,
                borderBottomWidth: 3,
                borderRightWidth: 3,
                borderColor: "white",
                width: 20,
                height: 20,
                zIndex: 9999,
              }}
            />
          </View>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
        </View>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
      </View>
    </SafeAreaView>
  );
};
