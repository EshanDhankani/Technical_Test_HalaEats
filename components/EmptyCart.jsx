import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmptyCart = () => (
  <View style={styles.emptyCart}>
    <Text style={styles.emptyCartText}>Your cart is empty</Text>
  </View>
);

const styles = StyleSheet.create({
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  emptyCartText: {
    fontSize: 18,
    color: "#666",
  },
});

export default EmptyCart;
