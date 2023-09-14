import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ModalPost from "./ModalPost";

function ButtonPost() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const TakePicture = async () => {
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });
  };

  return (
    <View style={styles.upStatus}>
      <Image
        style={styles.avatar}
        source={require("~/assets/image/Avatar.jpg")}
      />
      <TouchableOpacity
        onPress={openModal}
        style={{ height: 50, width: 290, justifyContent: "center" }}
      >
        <Text style={{ color: "white" }}>Bạn đang nghĩ gì?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 12,
          paddingLeft: 12
        }}
        onPress={TakePicture}
      >
        <Ionicons name="ios-images" size={24} color="#44b75f" />
      </TouchableOpacity>

      <ModalPost visible={modalVisible} onClose={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  upStatus: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    backgroundColor: "#212323",
  },

  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: 14,
    marginRight: 8,
  },

  activityIcon: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 12,
    paddingLeft: 12,
    marginLeft: 8,
    borderRadius: 50,
    backgroundColor: "#3b3c3d",
  },
});

export default ButtonPost;
