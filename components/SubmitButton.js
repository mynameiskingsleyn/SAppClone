import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../constants/colors";

const SubmitButton = (props) => {
  const enabledBgColor = props.bgColor || colors.primary;
  const disabledBgColor = props.disBgColor || colors.lightGrey;
  const enabledColor = props.color || "white";
  const disabledColor = props.disColor || colors.grey;
  const bgColor = props.disabled ? disabledBgColor : enabledBgColor;
  return (
    <TouchableOpacity
      onPress={props.disabled ? () => {} : props.onPress}
      style={{
        ...styles.button,
        ...props.style,
        ...{ backgroundColor: bgColor },
      }}
    >
      <Text
        style={{
          color: props.disabled ? disabledColor : enabledColor,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SubmitButton;
