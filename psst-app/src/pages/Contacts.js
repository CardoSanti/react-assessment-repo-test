import React, { useEffect } from "react";
import ContactsList from "../components/contacts/ContactsList";
// import AddContact from "../components/contacts/AddUpdateContact";
import ListHeader from "../components/ui/ListHeader";
import useHttp from "../hooks/use-http";
import { getAllContacts } from "../libs/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Contacts = () => {
  // const [contactList, setContactList] = useState([]);
  const {
    sendRequest,
    status,
    data: loadedContacts,
    error,
  } = useHttp(getAllContacts, true);

  useEffect(() => {
    sendRequest();
  }, []);

  if (status === "pending") {
    console.log(status);
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <p className="centered no-content-text">{`Something went wrong: ${error}`}</p>
    );
  }

  console.log(loadedContacts);

  // if (status === "completed") {

  // }

  return (
    <>
      <div className="centered">
        <ListHeader contactCount={loadedContacts.length} />
        {loadedContacts.length === 0 && (
          <p className="no-content-text centered">
            <span>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</span>
            You have no contacts.
          </p>
        )}
        {loadedContacts.length !== 0 && <ContactsList list={loadedContacts} />}
      </div>
    </>
  );
};

export default Contacts;
