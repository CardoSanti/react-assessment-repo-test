import React from "react";

const Input = (props) => {
  return (
    <div className={classes.form}>
      <input
        ref={nameInputRef}
        type="text"
        autoComplete="off"
        onChange={nameChangeHandler}
      />
      <label htmlFor="name" className={classes["label-name"]}>
        <span
          className={`${classes["content-name"]} ${
            enteredNameIsValid ? classes["span-valid"] : ""
          }`}
        >
          Name
        </span>
      </label>
    </div>
  );
};

export default Input;
