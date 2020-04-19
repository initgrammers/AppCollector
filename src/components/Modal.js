import React from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback,
} from "react-native";

export default ({ modalVisible, onPress }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            flex: 1,
            marginTop: 22,
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: 16,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 8,
              height: 200,
              padding: 16,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                borderBottomWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
              }}
            >
              Alerta
            </Text>
            <Text style={{ fontSize: 16, flex: 1, marginTop: 16 }}>
              Debe seleccionar al menos un pasajero
            </Text>

            <TouchableHighlight
              style={{
                backgroundColor: "#FFD428",
                height: 44,
                marginTop: 16,
                borderRadius: 8,
                justifyContent: "center",
              }}
              onPress={onPress}
            >
              <Text style={{ textAlign: "center" }}>ok</Text>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
