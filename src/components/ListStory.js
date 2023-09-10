import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { sliderStory } from "~/models/data";

function ListStory() {
  return (
    <View style={styles.story}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.btnAddStory}>
        <Image
          style={styles.avatarAddStory}
          source={require("~/assets/image/Avatar.jpg")}
        />
        <View
          style={{
            position: "absolute",
            top: "50%",
            alignItems: "center",
          }}
        >
          <Image
            source={require("~/assets/image/addIcon.png")}
            style={{
              height: 40,
              width: 40,
              borderWidth: 4,
              backgroundColor: "#0766ff",
              borderColor: "#212323",
              borderRadius: 50,
              marginBottom: 50,
            }}
          />
          <Text style={{ color: "white", fontSize: 18, fontWeight: "400" }}>
            Tạo tin
          </Text>
        </View>
      </View>
      {sliderStory.map((data) => (
        <Image style={styles.itemStory} key={data.id} source={data.image} />
      ))}
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  itemStory: {
    width: 160,
    height: 260,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },

  story: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#212323",
  },

  btnAddStory: {
    width: 160,
    height: 260,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    alignItems: "center",
  },

  avatarAddStory: {
    width: 160,
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default ListStory;
