import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useCart } from "../CartContext";
import QuantitySelector from "../components/QuantitySelector";
import AddToCartButton from "../components/AddToCartButton";

const ProductDetailScreen = ({ route }) => {
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

      <QuantitySelector
        quantity={quantity}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />

      <AddToCartButton onPress={handleAddToCart} />
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
});
