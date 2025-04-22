import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../CartContext";
import CartIconWithBadge from "../components/CartIconWithBadge";
import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import productData from "../data/ProductData";

const categories = ["Trending Now", "All", "New", "Men"];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const { getItemsCount } = useCart();
  const cartItemsCount = getItemsCount();

  const filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <Header />
      <SectionTitle
        title="Match Your Style"
        rightComponent={
          <CartIconWithBadge
            count={cartItemsCount}
            onPress={() => navigation.navigate("CartStack")}
          />
        }
      />
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList
        products={filteredProducts}
        onProductPress={(product) =>
          navigation.navigate("ProductDetail", { product })
        }
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
