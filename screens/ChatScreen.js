import React, { useCallback, useState } from "react";
import { TextInput } from "react-native";
import { ImageBackground } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";
import backgroundImage from "../assets/images/droplet.jpeg";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState("");
  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);
  return (
    <SafeAreaView edges={["right", "left", "buttom"]} style={style.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={backgroundImage}
          style={style.backgroundImage}
        ></ImageBackground>
        <View style={style.inputContainer}>
          <TouchableOpacity
            style={style.mediaButton}
            onPress={() => console.log("pressed")}
          >
            <Feather name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>
          <TextInput
            style={style.textbox}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={sendMessage}
          />
          {messageText === "" && (
            <TouchableOpacity
              style={style.mediaButton}
              onPress={() => console.log("pressed")}
            >
              <Feather name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}
          {messageText !== "" && (
            <TouchableOpacity
              style={{ ...style.mediaButton, ...style.sendButton }}
              onPress={sendMessage}
            >
              <MaterialCommunityIcons name="send" size={20} color={"white"} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  screen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 60,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItem: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    radius: 50,
    padding: 8,
  },
});

export default ChatScreen;
