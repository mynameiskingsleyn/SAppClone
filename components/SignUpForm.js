import React from "react";
import SubmitButton from "./SubmitButton";
import PageContainer from "./PageContainer";
import { Feather, FontAwesome } from "@expo/vector-icons";
import validate from "validate.js";
import Input from "./Input";

const SignUpForm = (props) => {
  const inputChangedHandler = (inputId, inputValue) => {
    if (inputId === "first_name" || inputId === "last_name") {
      const constraints = {
        presence: { allowEmpty: false },
      };
      if (inputValue !== "") {
        constraints.format = {
          pattern: "[a-z]+",
          flags: "i",
          message: "can only contain letters",
        };
      }
      invalid = validate({ [inputId]: inputValue }, { [inputId]: constraints });
      console.log(invalid);
    } else if (inputId === "email") {
      touched = true;
    } else if (inputId === "password") {
    }
  };
  return (
    <>
      <Input
        id="first_name"
        label="First Name"
        icon="user-o"
        iconPack={FontAwesome}
        iconSize={22}
        onInputChanged={inputChangedHandler}
        errorText=""
      />
      <Input
        id="last_name"
        label="Last Name"
        icon="user-o"
        iconPack={FontAwesome}
        iconSize={22}
        errorText=""
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        iconSize={22}
        errorText=""
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        iconSize={22}
        errorText=""
        onInputChanged={inputChangedHandler}
      />
      <SubmitButton
        title="Sign Up"
        onPress={() => console.log("button pressed!!")}
        sytle={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
