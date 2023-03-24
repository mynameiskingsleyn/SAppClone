import validate from "validate.js";

export const validateString = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };
  if (value !== "") {
    constraints.format = {
      pattern: "[A-Ba-z]+",
      flags: "i",
      message: "can only contain letters",
    };
  }
  var validationResult = validate({ [id]: value }, { [id]: constraints });
  return validationResult && validationResult[id];
};

export const validateEmail = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };
  if (value !== "") {
    constraints.email = true;
  }
  var validationResult = validate({ [id]: value }, { [id]: constraints });
  return validationResult && validationResult[id];
};

export const validatePassword = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };
  if (value !== "") {
    constraints.length = {
      minimum: 5,
      maximum: 10,
      tooShort: "must be more than 5 characters ",
      tooLong: "must be less than 11 characters",
    };
  }
  var validationResult = validate({ [id]: value }, { [id]: constraints });
  return validationResult && validationResult[id];
};
