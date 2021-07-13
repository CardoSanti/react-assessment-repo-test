import { useState } from "react";

const useInput = (validateValue, initialValue = "") => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    //*handles input changes and sets the current name value to a constant
    const currentValue = event.target.value;
    setEnteredValue(currentValue);
    if (currentValue.trim().length !== 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const inputBlurHandler = () => {
    //*handles the property if the user loses focus e.g. when the user leaves a form field or input field and sets the boolean to check if the field has been touched
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
    setIsEmpty(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isEmpty: !isEmpty && isTouched,
    hasError: hasError,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useInput;
