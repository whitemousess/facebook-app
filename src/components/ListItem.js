import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Feather,
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function ListItem({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={data.avatar} style={styles.avatar} />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.fullName}>{data.fullName}</Text>
            {data.checked && (
              <Image
                style={{ width: 10, height: 10 }}
                source={require("~/assets/image/tick.png")}
              />
            )}
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.createTime}>{data.createTime}</Text>
            {data.privacy && (
              <Image
                style={{ width: 10, height: 10 }}
                source={require("~/assets/image/Public.png")}
              />
            )}
          </View>
        </View>

        <View style={styles.activity}>
          <TouchableOpacity>
            <Feather
              style={{ marginRight: 20 }}
              name="more-horizontal"
              size={24}
              color="#afb3b7"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="close" size={24} color="#afb3b7" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.status}>{data.status}</Text>
        <Image style={styles.image} source={data.image} />
      </View>

      <View style={styles.interact}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("~/assets/image/like.png")}
          />
          <Image
            style={{ width: 20, height: 20 }}
            source={require("~/assets/image/haha.png")}
          />
          <Image
            style={{ width: 20, height: 20 }}
            source={require("~/assets/image/sad.png")}
          />
          <Text style={{ color: "#fff", marginLeft: 5 }}>{data.interact}</Text>
        </View>
        <View style={styles.flexDirection}>
          <Text style={{ color: "white", marginRight: 10 }}>
            {data.comment} bình luận{" "}
          </Text>
          <Text style={{ color: "white" }}>{data.share} chia sẻ</Text>
        </View>
      </View>

      <View style={styles.interActive}>
        <View style={styles.flexDirection}>
          <AntDesign name="like2" size={24} color="#afb3b7" />
          <Text
            style={{ alignItems: "center", color: "#afb3b7", marginLeft: 5 }}
          >
            Thích
          </Text>
        </View>
        <View style={styles.flexDirection}>
          <FontAwesome name="comment-o" size={24} color="#afb3b7" />
          <Text
            style={{ alignItems: "center", color: "#afb3b7", marginLeft: 5 }}
          >
            Bình luận
          </Text>
        </View>
        <View style={styles.flexDirection}>
          <Ionicons
            name="arrow-undo-outline"
            size={24}
            color="#afb3b7"
            style={{ transform: [{ scaleX:-1 }] }}
          />
          <Text
            style={{ alignItems: "center", color: "#afb3b7", marginLeft: 5 }}
          >
            Chia sẻ
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212323",
    marginBottom: 10,
    paddingBottom: 10,
  },

  flexDirection: {
    flexDirection: "row",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-",
    alignItems: "center",
    margin: 12,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  fullName: { color: "white", marginLeft: 6, marginRight: 8 },
  createTime: { color: "#afb3b7", marginLeft: 6, marginRight: 8 },

  activity: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },

  description: {},

  status: {
    color: "white",
    margin: 12,
  },

  image: {
    width: "100%",
    height: 250,
    objectFit: "contain",
  },

  interact: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  interActive: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    borderTopColor: "#afb3b7",
    borderTopWidth: 0.2,
  },
});

export default ListItem;
