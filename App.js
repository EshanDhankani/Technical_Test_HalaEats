import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { CartProvider, useCart } from "./CartContext";


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

// Home Stack containing Home and ProductDetail screens
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

// Cart Stack
function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
    </CartStack.Navigator>
  );
}

// Account Stack
function Account() {
  return (
    <View style={styles.center}>
      <Text>Account</Text>
    </View>
  );
}

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="AccountScreen"
        component={Account}
        options={{ headerShown: false }}
      />
    </AccountStack.Navigator>
  );
}

// TabBar Icon with Badge
function TabIcon({ name, badgeCount, iconLib }) {
  const IconComponent = iconLib;
  return (
    <View style={{ width: 24, height: 24 }}>
      <IconComponent name={name} size={24} color="#000" />
      {badgeCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
}

// Bottom Tabs containing Home, Cart, Account
function TabNavigator() {
  const { getItemsCount } = useCart();
  const cartItemsCount = getItemsCount();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStackScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <TabIcon
              name="shoppingcart"
              badgeCount={cartItemsCount}
              iconLib={AntDesign}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStackScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
