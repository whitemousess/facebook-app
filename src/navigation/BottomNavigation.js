import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";

import HomeScreen from "~/screens/HomeScreen";
import VideoScreen from "~/screens/VideoScreen";
import NotificationScreen from "~/screens/NotificationScreen";
import MenuScreen from "~/screens/MenuScreen";

const Bottom = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#afb3b7",
        tabBarActiveTintColor: "#0766ff",
        tabBarStyle: {backgroundColor: "#1c1c1c",borderColor: "#000",borderTopWidth: .2,},
      }}
    >
      <Bottom.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: "Trang chủ",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="VideoTab"
        component={VideoScreen}
        options={{
          title: "Video",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="ondemand-video" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="NotificationTab"
        component={NotificationScreen}
        options={{
          title: "Thông báo",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-notifications-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="MenuTab"
        component={MenuScreen}
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{
                width: 30,
                height: 30,
                marginTop: 5,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: color,
              }}
              source={require("~/assets/image/Avatar.jpg")}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

export default BottomNavigation;

const styles = StyleSheet.create({});
