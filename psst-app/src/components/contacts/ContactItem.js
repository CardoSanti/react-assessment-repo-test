import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ContactItem.module.css";
import view_icon from "../../assets/visibility.svg";
import edit_icon from "../../assets/pencil.svg";
import delete_icon from "../../assets/trash.svg";

const ContactItem = (props) => {
  const id = props.id;
  const name = props.name;
  const email = props.email;
  const phoneNumber = props.phoneNumber;

  const deleteClickHandler = () => {
    props.onDelete(id);
  };

  return (
    <div className={classes["contact-item-container"]}>
      <div className={classes["contact-item-content"]}>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <span>{email}</span>
        </div>
        <div>
          <span>{phoneNumber}</span>
        </div>
      </div>
      <div className={classes.actions}>
        {/* TODO: WE HAVE TO PUT AN SVG FOR EVERY BUTTON AND CREATE HOVER TEXT WHEN ::HOVER */}

        <NavLink to={`/contacts/${id}`} exact>
          <button>
            <img
              src={view_icon}
              className={classes["btn-icon"]}
              alt="View button"
            />
          </button>
        </NavLink>
        <NavLink to={`/contacts/${id}/edit`}>
          <button>
            <img
              src={edit_icon}
              className={classes["btn-icon"]}
              alt="View button"
            />
          </button>
        </NavLink>
        <button onClick={deleteClickHandler}>
          <img
            src={delete_icon}
            className={classes["btn-icon"]}
            alt="View button"
          />
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
