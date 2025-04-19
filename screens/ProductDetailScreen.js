import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useCart } from "../CartContext";

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    Alert.alert(
      "Added to Cart",
      `${quantity} ${product.title} added to your cart`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQty} style={styles.qtyButton}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qtyNumber}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQty} style={styles.qtyButton}>
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}
      >
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  image: {
    width: screenWidth * 0.8,
    height: 300,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  price: {
    fontSize: 20,
    color: "#666",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  qtyButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  qtyNumber: {
    fontSize: 20,
    marginHorizontal: 15,
  },
  addToCartButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 30,
  },
  cartText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});


