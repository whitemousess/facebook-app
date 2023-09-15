import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export const sliderStory = [
  {
    id: "1",
    image: require("~/assets/image/Avatar.jpg"),
  },
  {
    id: "2",
    image: require("~/assets/image/Avatar.jpg"),
  },
  {
    id: "3",
    image: require("~/assets/image/Avatar.jpg"),
  },
];

export const postsItems = [
  {
    id: 1,
    avatar: require("~/assets/image/Avatar.jpg"),
    fullName: "Trần Ngọc Thắng",
    checked: true,
    createTime: "2 ngày",
    status: "Liên minh huyền thoại",
    image: require("~/assets/image/LienMinh.png"),
    privacy: true,
    interact: 120,
    comment: 20,
    share: 32,
  },
  {
    id: 2,
    avatar: require("~/assets/image/status2.jpg"),
    fullName: "Ngọc Thắng",
    checked: true,
    createTime: "2 ngày",
    status: "anh dai dien",
    image: require("~/assets/image/status2.jpg"),
    privacy: true,
    interact: 120,
    comment: 20,
    share: 32,
  },
  {
    id: 3,
    avatar: require("~/assets/image/Avatar.jpg"),
    fullName: "Trần Ngọc Thắng",
    checked: true,
    createTime: "1 ngày",
    status: "Liên minh huyền thoại",
    image: require("~/assets/image/LienMinh.png"),
    privacy: true,
    interact: 120,
    comment: 20,
    share: 32,
  },
];

export const DataShortCut = [
  { id: 1, title: "Kỷ niệm", icon:  <Entypo name="back-in-time" size={24} color="white" /> },
  { id: 2, title: "Bạn bè", icon: <FontAwesome5 name="user-friends" size={24} color="white"/> },
  { id: 3, title: "Nhóm", icon: <FontAwesome name="group" size={24} color="white" /> },
  { id: 4, title: "Bảng feed", icon: <FontAwesome name="newspaper-o" size={24} color="white" /> },
  { id: 5, title: "Khám phá mọi người", icon: <FontAwesome5 name="user-friends" size={24} color="white"/> },
  { id: 6, title: "Marketplace", icon: <Entypo name="shop" size={24} color="white" /> },
  { id: 7, title: "Video", icon: <MaterialIcons name="ondemand-video" size={24} color="white" /> },
  { id: 8, title: "Đã lưu", icon: <AntDesign name="save" size={24} color="white" /> },
];
