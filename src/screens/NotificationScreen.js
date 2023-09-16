import { StyleSheet, Text, View } from "react-native";

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>NotificationScreen</Text>
      <Text style={{ color: "white" }}>coming soon !</Text>
    </View>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
  },
});
