import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ShortCut from "~/components/ShortCut";
import { DataShortCut } from "~/models/data";

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
              paddingBottom: 20,
              borderBottomColor: "#afb3b7",
              borderBottomWidth: 0.2,
            }}
          >
            {DataShortCut.map((data) => (
              <ShortCut key={data.id} data={data} />
            ))}
            <TouchableOpacity style={styles.buttonFullWidth}>
              <Text style={{ color: "white" }}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: "95%",
              height: 52,
              flexDirection: "row",
              alignItems: "center",
              borderBottomColor: "#afb3b7",
              borderBottomWidth: 0.2,
            }}
          >
            <AntDesign name="questioncircle" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 18, marginLeft: 24 }}>
              Trợ giúp & hỗ trợ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "95%",
              height: 52,
              alignItems: "center",

              flexDirection: "row",
              borderBottomColor: "#afb3b7",
              borderBottomWidth: 0.2,
            }}
          >
            <Ionicons name="settings" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 18, marginLeft: 24 }}>
              Cài đặt và quyền riêng tư
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonFullWidth}>
          <Text style={{ color: "white" }}>Đăng xuất</Text>
        </TouchableOpacity>
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

  buttonFullWidth: {
    width: "95%",
    height: 40,
    marginTop: 24,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#323435",
  },
});
