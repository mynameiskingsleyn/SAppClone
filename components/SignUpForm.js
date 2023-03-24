import React, { useReducer, useCallback } from "react";
import SubmitButton from "./SubmitButton";
import PageContainer from "./PageContainer";
import { Feather, FontAwesome } from "@expo/vector-icons";
import validate from "validate.js";
import Input from "./Input";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
const SignUpForm = (props) => {
  const initialState = {
    inputValidities: {
      first_name: false,
      last_name: false,
      email: false,
      password: false,
    },
    formIsValid: false,
  };
  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const validationResult = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult });
    },
    [dispatchFormState]
  );
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  return (
    <>
      <Input
        id="first_name"
        label="First Name"
        icon="user-o"
        iconPack={FontAwesome}
        iconSize={22}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities[first_name]}
        autoCapitalize="none"
      />
      <Input
        id="last_name"
        label="Last Name"
        icon="user-o"
        iconPack={FontAwesome}
        iconSize={22}
        autoCapitalize="none"
        errorText={formState.inputValidities[last_name]}
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        iconSize={22}
        errorText={formState.inputValidities[email]}
        autoCapitalize="none"
        keyboardType="email-address"
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        iconSize={22}
        errorText={formState.inputValidities[password]}
        autoCapitalize="none"
        secureTextEntry
        onInputChanged={inputChangedHandler}
      />
      <SubmitButton
        title="Sign Up"
        onPress={() => console.log("button pressed!!")}
        sytle={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignUpForm;
