import React from "react";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { sliderStory, postsItems } from "~/models/data";
import ListStory from "~/components/ListStory";
import ListItem from "~/components/ListItem";
import ButtonPost from "~/components/ButtonPost";

function HomeScreen() {
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>facebook</Text>

          <View style={styles.activity}>
            <TouchableOpacity style={styles.activityIcon}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.activityIcon}>
              <Feather name="search" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.activityIcon}>
              <FontAwesome5 name="facebook-messenger" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <ButtonPost />

        <ListStory />

        {postsItems.map((data) => (
          <ListItem key={data.id} data={data} />
        ))}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#212323",
    paddingTop: 40,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 10,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  activity: { flexDirection: "row" },

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
