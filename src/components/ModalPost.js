import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

const ModalPost = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={{ marginLeft: 10 }}>
          <AntDesign name="close" size={28} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18 }}>Tạo bài viết</Text>
        <TouchableOpacity onPress={() => {}} style={{ marginRight: 10 }}>
          <Text style={{ fontSize: 18, color: "#6e7275" }}>Tiếp</Text>
        </TouchableOpacity>
      </View>

    <ScrollView style={styles.body}>
          <View style={styles.privacy}>
            <Image
              style={styles.avatar}
              source={require("~/assets/image/Avatar.jpg")}
            />
  
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "700",
                  marginTop: 10,
                }}
              >
                Chuột bạch
              </Text>
  
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.btnActive}>
                  <MaterialIcons name="public" size={18} color="#6eacf1" />
                  <Text
                    style={{
                      color: "#6eacf1",
                      fontWeight: "700",
                      fontSize: 15,
                      marginLeft: 6,
                    }}
                  >
                    Công khai
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnActive}>
                  <Ionicons name="add" size={24} color="#6eacf1" />
                  <Text
                    style={{
                      color: "#6eacf1",
                      fontWeight: "700",
                      fontSize: 15,
                    }}
                  >
                    Album
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
  
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#818588"
            placeholder="Bạn đang nghĩ gì?"
            multiline={true}
          />
    </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "10%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333334",
  },

  body: {
    height: "90%",
    backgroundColor: "#2c2f2f",
  },

  privacy: {
    flexDirection: "row",
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginTop: 14,
    marginLeft: 14,
    marginRight: 10,
  },

  btnActive: {
    marginTop: 6,
    marginRight: 8,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 12,
    paddingRight: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#233a52",
  },

  textInput: {
    marginLeft: 14,
    marginTop: 24,
    marginRight: 14,
    marginBottom: 90,
    fontSize: 18,
    color: "#fff",
  },
});

export default ModalPost;
