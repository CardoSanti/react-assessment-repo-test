import React from "react";
import useInput from "../../hooks/use-input";
import Card from "../ui/Card";
import classes from "./AddUpdateContact.module.css";

const AddUpdateContact = (props) => {
  const isEdit = props.isEdit;

  let btn_text = "Add";
  let initNameVal = "";
  let initEmailVal = "";
  let initPhoneNumberVal = "";

  if (isEdit) {
    btn_text = "Update";
    const {
      name: currentName,
      email: currentEmail,
      phoneNumber: currentPhoneNumber,
    } = props.item;
    initNameVal = currentName;
    initEmailVal = currentEmail;
    initPhoneNumberVal = currentPhoneNumber;
  }

  // console.log(initNameVal, initEmailVal, initPhoneNumberVal);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    isEmpty: nameIsEmpty,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => {
    return value.trim() !== "";
  }, initNameVal);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    isEmpty: emailIsEmpty,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => {
    let res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3,4})+$/;
    return res.test(value);
  }, initEmailVal);

  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    hasError: phoneNumberHasError,
    isEmpty: phoneNumberIsEmpty,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberInputBlurHandler,
    reset: resetPhoneNumberInput,
  } = useInput((value) => {
    return value.trim() !== "";
  }, initPhoneNumberVal);

  const initCurrentNameBool = isEdit && !nameIsEmpty;
  const initCurrentEmailBool = isEdit && !emailIsEmpty;
  const initCurrentPhoneNumberBool = isEdit && !phoneNumberIsEmpty;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneNumberIsValid
    ) {
      console.log("returned, values are invalid");
      return;
    }
    console.log(enteredName, enteredEmail, enteredPhoneNumber);

    const newData = {
      name: enteredName,
      email: enteredEmail,
      phoneNumber: enteredPhoneNumber,
    };

    if (!isEdit) {
      props.onAddContact(newData);
    } else {
      props.onUpdateContact(newData);
    }

    resetNameInput();
    resetEmailInput();
    resetPhoneNumberInput();
  };

  const nameBool = nameIsEmpty || initCurrentNameBool;
  const emailBool = emailIsEmpty || initCurrentEmailBool;
  const phoneNumberBool = phoneNumberIsEmpty || initCurrentPhoneNumberBool;

  const nameEmptyClasses = `${classes["content-name"]} ${
    nameBool ? classes["span-valid"] : ""
  }`;
  const emailEmptyClasses = `${classes["content-name"]} ${
    emailBool ? classes["span-valid"] : ""
  }`;

  const phoneNumberEmptyClasses = `${classes["content-name"]} ${
    phoneNumberBool ? classes["span-valid"] : ""
  }`;

  return (
    <Card className="margined-top">
      <form onSubmit={formSubmitHandler}>
        <div>
          <div className={classes["form-container"]}>
            <div className={classes.form}>
              <input
                type="text"
                autoComplete="off"
                id="name"
                value={enteredName}
                onChange={nameChangeHandler}
                onBlur={nameInputBlurHandler}
              />
              <label htmlFor="name" className={classes["label-name"]}>
                <span className={nameEmptyClasses}>Name</span>
              </label>
            </div>
            {nameHasError && (
              <p className={classes["error-text"]}>Name must not be empty!</p>
            )}
          </div>
          <div className={classes["form-container"]}>
            <div className={classes.form}>
              <input
                type="text"
                autoComplete="off"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailInputBlurHandler}
              />
              <label htmlFor="name" className={classes["label-name"]}>
                <span className={emailEmptyClasses}>Email</span>
              </label>
            </div>
            {emailHasError && (
              <p className={classes["error-text"]}>
                Please enter a valid email!
              </p>
            )}
          </div>
          <div className={classes["form-container"]}>
            <div className={classes.form}>
              <input
                type="tel"
                id="phone_number"
                autoComplete="off"
                value={enteredPhoneNumber}
                onChange={phoneNumberChangeHandler}
                onBlur={phoneNumberInputBlurHandler}
              />
              <label htmlFor="name" className={classes["label-name"]}>
                <span className={phoneNumberEmptyClasses}>Phone Number</span>
              </label>
            </div>
            {phoneNumberHasError && (
              <p className={classes["error-text"]}>
                Please enter a valid phone number!
              </p>
            )}
          </div>
        </div>
        <div className={classes.actions}>
          <button>{btn_text}</button>
        </div>
      </form>
    </Card>
  );
};

export default AddUpdateContact;
