import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Product from "./Product";

const ProductList = ({ products, onProductPress }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.productScrollView}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={styles.productsWrapper}>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onPress={() => onProductPress(product)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  productScrollView: {
    flex: 1,
  },
  productsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },
});
