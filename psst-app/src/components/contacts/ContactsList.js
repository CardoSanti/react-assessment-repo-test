import React, { useState } from "react";
import useHttp from "../../hooks/use-http";
import Card from "../ui/Card";
import ContactItem from "./ContactItem";
import classes from "./ContactsList.module.css";
import { deleteContactItem } from "../../libs/api";
import LoadingSpinner from "../ui/LoadingSpinner";

const ContactList = (props) => {
  const [contactList, setContactList] = useState(props.list);
  // const list = props.list;

  console.log(contactList);

  const { sendRequest, status } = useHttp(deleteContactItem);

  const deleteHandler = (id) => {
    console.log("delete item", id);
    sendRequest(id);
    // props.onUpdate(id);
    setContactList(
      contactList.filter((contact) => {
        return contact.id !== id;
      })
    );
  };

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed") {
    console.log("deleted");
  }

  return (
    <Card>
      <ul className={classes.list}>
        {contactList &&
          contactList.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                email={contact.email}
                phoneNumber={contact.phoneNumber}
                onDelete={deleteHandler}
              />
            );
          })}
      </ul>
    </Card>
  );
};

export default ContactList;
