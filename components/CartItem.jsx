import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.cartItem}>
      <Image source={item.product.image} style={styles.productImage} resizeMode="contain" />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.product.title}</Text>
        <Text style={styles.productPrice}>{item.product.price}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onRemove(item.product.id)}>
        <Text style={styles.deleteText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    alignItems: "center",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  quantity: {
    fontSize: 14,
    color: "#666",
  },
  deleteButton: {
    backgroundColor: "#ff4d4f",
    padding: 8,
    borderRadius: 5,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CartItem;
