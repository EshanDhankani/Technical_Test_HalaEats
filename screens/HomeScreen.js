import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Category from "../components/Category";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import Product from "../components/Product";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../CartContext";

const categories = ["Trending Now", "All", "New", "Men"];

const productData = [
  {
    id: "1",
    image: require("../assets/1.png"),
    title: "Maroon 3 piece",
    price: "Rs: 8999",
  },
  {
    id: "2",
    image: require("../assets/2.png"),
    title: "Black 3 piece",
    price: "Rs: 11999",
  },
  {
    id: "3",
    image: require("../assets/3.png"),
    title: "White 3 piece",
    price: "Rs: 7999",
  },
  {
    id: "4",
    image: require("../assets/4.png"),
    title: "Navy blue 2 piece",
    price: "Rs: 6799",
  },
  {
    id: "5",
    image: require("../assets/5.png"),
    title: "Purple 3 piece",
    price: "Rs: 9999",
  },
  {
    id: "6",
    image: require("../assets/6.png"),
    title: "Formal Suit",
    price: "Rs: 10499",
  },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const { getItemsCount } = useCart();
  const cartItemsCount = getItemsCount();

  // Filter products based on search query
  const filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.matchText}>Match Your Style</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CartStack")}>
          <View style={styles.cartIconContainer}>
            <AntDesign
              style={styles.cart}
              name="shoppingcart"
              size={25}
              color="black"
            />
            {cartItemsCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartItemsCount}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {/* input container */}
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name="search" size={26} color="#C0C0C0" />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Category Section */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Category
              item={item}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
          keyExtractor={(item) => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Product List Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.productScrollView}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.productsWrapper}>
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              onPress={() => navigation.navigate("ProductDetail", { product })}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  matchText: {
    fontSize: 28,
    color: "#000000",
  },
  cartIconContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
  },
  categoryContainer: {
    marginBottom: 20,
  },
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
