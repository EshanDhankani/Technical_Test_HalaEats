import { View, Text, StyleSheet } from "react-native";

const SectionTitle = ({ title, rightComponent }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {rightComponent}
  </View>
);

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  title: {
    fontSize: 28,
    color: "#000000",
  },
});
