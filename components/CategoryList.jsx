import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Category from "./Category";

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
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
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: 20,
  },
});
