import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import firebase from "../../firebase";
import { useSelector, useDispatch } from "react-redux";

export default ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
      .then((result) => {
        console.log(result);
        dispatch({ type: "RESET" });
        navigation.navigate("Home");
      })
      .catch((error) => console.log(error));
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        marginTop: 16,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};
