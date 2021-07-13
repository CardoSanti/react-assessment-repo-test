import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import AddUpdateContact from "../components/contacts/AddUpdateContact";
import useHttp from "../hooks/use-http";
import { getContactItem } from "../libs/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const UpdateContactPage = () => {
  const params = useParams();
  const history = useHistory();
  const { id } = params;

  console.log("params: ", id);

  const updateContactHandler = async (updatedContactData) => {
    console.log("updating", updatedContactData);
    const response = await fetch(
      `https://react-assessment-477c4-default-rtdb.firebaseio.com/contacts/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(updatedContactData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      return <p className="centered">{response.json().message}</p>;
    }
    history.push(`/contacts/${id}`);
  };

  const {
    sendRequest: getContactItemRequest,
    status: getContactItemStatus,
    data: loadedContactData,
    error: getContactItemError,
  } = useHttp(getContactItem);

  useEffect(() => {
    getContactItemRequest(id);
  }, [getContactItemRequest, id]);

  if (getContactItemStatus === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (getContactItemError) {
    console.log(getContactItemError);
    return <p>Error + {getContactItemError}</p>;
  }

  console.log("loadedContactData: ", loadedContactData);

  return (
    <div className="centered">
      {loadedContactData && (
        <AddUpdateContact
          item={loadedContactData}
          onUpdateContact={updateContactHandler}
          isEdit={true}
        />
      )}
    </div>
  );
};

export default UpdateContactPage;
