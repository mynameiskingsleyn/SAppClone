export const reducer = (state, action) => {
  const { inputId, validationResult } = action;
  //console.log(validationResult);
  const updatedValidities = {
    ...state.inputValidities,
    [inputId]: validationResult,
  };
  let updatedFormIsValid = true;
  for (const key in updatedValidities) {
    if (updatedValidities[key] !== undefined) {
      updatedFormIsValid = false;
      break;
    }
  }

  return {
    inputValidities: updatedValidities,
    formIsValid: updatedFormIsValid,
  };
};
