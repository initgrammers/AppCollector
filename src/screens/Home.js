import React from "react";
import SafeAreaView from "../components/SafeAreaView";
import CardRate from "../components/CardRate";
import { TouchableOpacity, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default ({ navigation }) => {
  const { price, normalPassenger, specialPassenger } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ padding: 18, justifyContent: "flex-end" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 64, textAlign: "center" }}>${price}</Text>
      </View>
      <CardRate
        type="Especial"
        count={specialPassenger}
        onPressPlus={() => dispatch({ type: "ADD_SPECIAL_PASSENGER" })}
        onPressLess={() => dispatch({ type: "REMOVE_SPECIAL_PASSENGER" })}
      />
      <CardRate
        type="Adultos"
        count={normalPassenger}
        onPressPlus={() => dispatch({ type: "ADD_NORMAL_PASSENGER" })}
        onPressLess={() => dispatch({ type: "REMOVE_NORMAL_PASSENGER" })}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#FFD428",
          height: 44,
          marginTop: 16,
          marginBottom: 16,
          borderRadius: 8,
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Scanner")}
      >
        <Text style={{ textAlign: "center" }}>Cobrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
