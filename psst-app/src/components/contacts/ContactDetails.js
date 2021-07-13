import React from "react";
import Card from "../ui/Card";
import classes from "./ContactDetails.module.css";
import { NavLink } from "react-router-dom";

const ContactDetails = (props) => {
  const { id, name, email, phoneNumber } = props.contactItem;
  return (
    <Card>
      <div className={classes["info-container"]}>
        <div className={classes["info-labels"]}>
          <label>Name</label>
          <label>Email</label>
          <label>Phone number</label>
        </div>
        <div className={classes["info-content"]}>
          <span>{name}</span>
          <span>{email}</span>
          <span>{phoneNumber}</span>
        </div>
        <NavLink
          className={classes["btn-link"]}
          to={`/contacts/${id}/edit`}
          exact
        >
          <div className={classes["actions"]}>
            <button>Edit</button>
          </div>
        </NavLink>
      </div>
    </Card>
  );
};

export default ContactDetails;
