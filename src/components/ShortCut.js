import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ShortCut() {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={{ color: "white" }}>ShortCut</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "46%",
    height: 70,
    padding: 10,
    marginTop: 10,
    marginRight: 10 ,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#323435",
  },
});

export default ShortCut;
