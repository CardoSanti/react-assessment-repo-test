import React, { useEffect } from "react";
import AddUpdateContact from "../components/contacts/AddUpdateContact";
import useHttp from "../hooks/use-http";
import { addContactItem } from "../libs/api";
import { useHistory } from "react-router";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const AddContactPage = () => {
  const { sendRequest, status } = useHttp(addContactItem);

  const history = useHistory();

  const addContactHandler = (contactData) => {
    sendRequest(contactData);
  };

  useEffect(() => {
    console.log(status);
    //*useHistory for the new contact page to be loaded and shown with the new contact's
    if (status === "completed") {
      history.push("/contacts");
    }
  }, [status, history]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="centered">
      <AddUpdateContact onAddContact={addContactHandler} isEdit={false} />
    </div>
  );
};

export default AddContactPage;
