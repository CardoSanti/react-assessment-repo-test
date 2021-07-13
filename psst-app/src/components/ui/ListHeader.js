import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ListHeader.module.css";

const ListHeader = (props) => {
  const count = props.contactCount;
  return (
    <div className={classes["list-header-container"]}>
      <div className={classes["content-counter"]}>Contacts({count})</div>
      <div className={classes["actions"]}>
        <NavLink to="/add-contact" exact>
          <button>Add Contact</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ListHeader;
