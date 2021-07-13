import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/user.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["logo-container"]}>
        <ul>
          <li>
            <NavLink to="/" exact>
              <div className={classes.logo}>
                <img
                  src={logo}
                  alt="contacts logo"
                  className={classes["logo-img"]}
                />
                <span className={classes["logo-name"]}>Contacts</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/contacts">
              {/* <div className={classes["nav-links"]}>
                <img
                  src={addIcon}
                  alt="Add contact icon"
                  className={classes["icon-img"]}
                />
                <span className={classes["icon-name"]}>Add Contact</span>
              </div> */}
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/messages">
              Messages
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
