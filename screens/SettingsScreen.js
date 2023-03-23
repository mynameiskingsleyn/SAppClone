import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = (props) => {
  return (
    <View style={style.container}>
      <Text> Setting !!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsScreen;
