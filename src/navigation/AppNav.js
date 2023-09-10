import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavigation from "./BottomNavigation";

function AppNav() {
  return (
    <NavigationContainer>
        <BottomNavigation />
    </NavigationContainer>
  );
}

export default AppNav;
