import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Product = ({ image, title, price, onPress }) => {
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = (screenWidth - 60) / 2;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: itemWidth }]}>
        <Image source={image} style={styles.coverImage} resizeMode="cover" />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  coverImage: {
    height: 200,
    width: "100%",
    borderRadius: 20,
  },
  title: {
    fontSize: 15,
    color: "#444444",
    fontWeight: "600",
    marginTop: 5,
  },
  price: {
    fontSize: 15,
    color: "#9C9C9C",
    fontWeight: "700",
    marginTop: 2,
  },
  content: {
    paddingHorizontal: 5,
  },
});


