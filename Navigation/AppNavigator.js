import React from "react";

//import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "../screens/AuthScreen";

import MainNavigator from "./MainNavigator";

const AppNavigator = (props) => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
