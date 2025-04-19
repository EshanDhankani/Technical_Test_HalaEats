import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation();

  const navigateToCart = () => {
    navigation.navigate('CartScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image source={require("../assets/apps.png")} style={styles.appIcon} />
      </View>
      <Image source={require("../assets/person.png")} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appIconContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 33,
    marginLeft: 3,
  },
  appIcon: {
    height: 28,
    width: 28,
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginTop: 22,
  },
});




