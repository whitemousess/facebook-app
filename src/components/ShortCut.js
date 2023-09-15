import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ShortCut({data}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => alert(data.title)}>
        {data.icon}
        <Text style={{ color: "white" }}>{data.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "46%",
    height: 70,
    padding: 10,
    margin: 5,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#323435",
  },
});

export default ShortCut;
