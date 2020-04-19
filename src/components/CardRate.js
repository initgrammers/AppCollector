import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default (props) => {
  const { type, count = 0, onPressPlus, onPressLess } = props;

  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: 190,
        borderRadius: 16,
        marginTop: 24,
      }}
    >
      <View
        style={{
          flex: 1,
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0,0,0,0.1)",
          alignItems: "center",
          flexDirection: "row",
          padding: 16,
        }}
      >
        <View
          style={{
            height: 44,
            width: 44,
            borderRadius: 22,
            backgroundColor: "#FFD428",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            {type[0]}
          </Text>
        </View>
        <View style={{ marginLeft: 16 }}>
          <Text>Pasaje</Text>
          <Text style={{ fontWeight: "bold" }}>{type}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={onPressLess}
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/less.png")} />
        </TouchableOpacity>
        <View>
          <Text style={{ textAlign: "center" }}>Cantidad</Text>
          <Text style={{ textAlign: "center", fontSize: 24 }}>{count}</Text>
        </View>
        <TouchableOpacity
          onPress={onPressPlus}
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/plus.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
