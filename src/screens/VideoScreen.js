import { StyleSheet, Text, View } from "react-native";

function VideoScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>VideoScreen</Text>
      <Text style={{ color: "white" }}>coming soon !</Text>
    </View>
  );
}

export default VideoScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1c1c1c",
  }
})
