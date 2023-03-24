import {
  validateString,
  validateEmail,
  validatePassword,
} from "../validationConstraints";

export const validateInput = (inputId, inputValue) => {
  if (inputId === "first_name" || inputId === "last_name") {
    return validateString(inputId, inputValue);
  } else if (inputId === "email") {
    return validateEmail(inputId, inputValue);
  } else if (inputId === "password") {
    return validatePassword(inputId, inputValue);
  }
};
