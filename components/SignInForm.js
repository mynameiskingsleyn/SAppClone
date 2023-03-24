import React, { useReducer, useCallback } from "react";
import SubmitButton from "./SubmitButton";
import PageContainer from "./PageContainer";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { validateInput } from "../utils/actions/formActions";
import Input from "./Input";
import { reducer } from "../utils/reducers/formReducer";

const SignInForm = (props) => {
  const initialState = {
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  };
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const validationResult = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult });
    },
    [dispatchFormState]
  );
  return (
    <>
      <Input
        label="Email"
        id="email"
        icon="mail"
        iconPack={Feather}
        iconSize={22}
        autoCapitalize="none"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["email"]}
      />
      <Input
        label="Password"
        id="password"
        icon="lock"
        iconPack={Feather}
        iconSize={22}
        errorText={formState.inputValidities["password"]}
        autoCapitalize="none"
        onInputChanged={inputChangedHandler}
        secureTextEntry
      />
      <SubmitButton
        title="Sign In"
        onPress={() => console.log("button pressed!!")}
        sytle={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignInForm;
