import { Feather, Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ShortCut from "~/components/ShortCut";

function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Menu</Text>

        <View style={styles.activity}>
          <TouchableOpacity style={styles.activityIcon}>
            <Ionicons name="settings-sharp" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.activityIcon}>
            <Feather name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={require("~/assets/image/Avatar.jpg")}
          />
          <Text style={{ color: "white", fontSize: 18 }}>Chuột bạch</Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={{ color: "white" }}>Tất cả lối tắt </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <ShortCut />
            <ShortCut />
            <ShortCut />
            <ShortCut />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
  },

  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 10,
  },

  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },

  activity: { flexDirection: "row" },

  activityIcon: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginLeft: 8,
    borderRadius: 50,
    backgroundColor: "#3b3c3d",
  },

  body: { padding: 10 },

  profile: {
    flexDirection: "row",
    padding: 14,
    backgroundColor: "#323435",
    borderRadius: 8,
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
});
