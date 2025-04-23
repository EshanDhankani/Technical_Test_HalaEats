import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TotalAmount = ({ total }) => (
  <View style={styles.totalContainer}>
    <Text style={styles.totalText}>Total Amount:</Text>
    <Text style={styles.totalPrice}>{total}</Text>
  </View>
);

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default TotalAmount;
