import React from "react";
import SubmitButton from "./SubmitButton";
import PageContainer from "./PageContainer";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Input from "./Input";

const SignInForm = (props) => {
  return (
    <>
      <Input
        label="Email"
        icon="mail"
        iconPack={Feather}
        iconSize={22}
        errorText=""
      />
      <Input
        label="Password"
        icon="lock"
        iconPack={Feather}
        iconSize={22}
        errorText=""
      />
      <SubmitButton
        title="Sign In"
        onPress={() => console.log("button pressed!!")}
        sytle={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignInForm;
