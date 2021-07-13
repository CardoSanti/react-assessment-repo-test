import React, { useEffect } from "react";
import { useParams } from "react-router";
import useHttp from "../hooks/use-http";
import { getContactItem } from "../libs/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ContactDetails from "../components/contacts/ContactDetails";

const ContactDetailsPage = () => {
  const params = useParams();
  const { id } = params;

  const {
    sendRequest,
    status,
    data: loadedContact,
    error,
  } = useHttp(getContactItem);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  console.log(loadedContact);
  if (loadedContact) {
    const { name, email, phoneNumber } = loadedContact;
    console.log(name, email, phoneNumber);
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  return (
    <div className="centered">
      {loadedContact && <ContactDetails contactItem={loadedContact} />}
    </div>
  );
};

export default ContactDetailsPage;
