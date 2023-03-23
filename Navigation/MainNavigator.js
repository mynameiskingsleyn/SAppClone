import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ChatSettingScreen from "../screens/ChatSettingScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

const MainNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatSettings"
        component={ChatSettingScreen}
        options={{
          headerTitle: "Settings",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
