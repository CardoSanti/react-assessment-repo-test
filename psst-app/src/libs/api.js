const FIREBASE_DOMAIN =
  "https://react-assessment-477c4-default-rtdb.firebaseio.com";

export async function addContactItem(contactData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/contacts.json`, {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add new contact.");
  }

  return null;
}

export async function getAllContacts() {
  const response = await fetch(`${FIREBASE_DOMAIN}/contacts.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch contacts.");
  }

  const rawContacts = [];

  console.log(data);

  for (const key in data) {
    if (data[key] !== null) {
      const contactObj = {
        id: key,
        ...data[key],
      };

      console.log(contactObj);
      rawContacts.push(contactObj);
    }
  }

  return rawContacts;
}

export async function getContactItem(contactId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/contacts/${contactId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch item.");
  }

  const loadedContact = {
    id: contactId,
    ...data,
  };

  return loadedContact;
}

export async function deleteContactItem(contactId) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/contacts/${contactId}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch item.");
  }

  return null;
}

export async function updateContactItem(contactId, contactData) {
  // const { contactId } = contactData;

  console.log(`${FIREBASE_DOMAIN}/contacts/${contactId}.json`);

  const response = await fetch(
    `${FIREBASE_DOMAIN}/contacts/${contactId}.json`,
    {
      method: "PUT",
      // body: JSON.stringify(contactData),
      headers: {
        "Content-Type": "application/json",
      },
      body: contactData,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add new contact.");
  }

  return null;
}
