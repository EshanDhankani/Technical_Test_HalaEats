import { View, TextInput, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const SearchBar = ({ value, onChangeText, placeholder = "Search" }) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Fontisto name="search" size={26} color="#C0C0C0" />
    </View>
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  </View>
);

export default SearchBar;

const styles = StyleSheet.create({
  container: {
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
  input: {
    flex: 1,
  },
});
