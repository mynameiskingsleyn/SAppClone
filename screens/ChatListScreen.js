import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ChatListScreen = (props) => {
  return (
    <View style={style.container}>
      <Text> Everything is working !!</Text>
      <Button
        title="Go to Chat"
        onPress={() => {
          props.navigation.navigate("ChatScreen");
        }}
      />
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

export default ChatListScreen;
