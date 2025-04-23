import React from "react";
import { StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import { useCart } from "../CartContext";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";
import TotalAmount from "../components/TotalAmount";

const CartScreen = () => {
  const { cartItems, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const priceValue = parseFloat(item.product.price.replace(/[^0-9.-]+/g, ""));
        return total + priceValue * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Cart</Text>

      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} onRemove={removeFromCart} />}
        keyExtractor={(item) => item.product.id.toString()}
        ListEmptyComponent={<EmptyCart />}
        contentContainerStyle={styles.listContent}
      />

      {cartItems.length > 0 && <TotalAmount total={getTotalPrice()} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 16,
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default CartScreen;
