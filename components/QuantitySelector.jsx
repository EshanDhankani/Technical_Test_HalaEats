// components/QuantitySelector.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const QuantitySelector = ({ quantity, increaseQty, decreaseQty }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseQty} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity onPress={increaseQty} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 15,
  },
});
