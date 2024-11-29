import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import ContactItemDetails from "./components/ContactItemDetails";
import AddContacts from "./components/AddContacts";
import ContactsContext from "./ContactsContext";

const App = () => {
  const [contactsList, updateContact] = useState([]);

  const AddContact = (contactData) => {
    const firstLetter = contactData.name[0].toUpperCase();
    const filteredContactsLength = contactsList.filter(
      (eachContact) => eachContact.id === firstLetter,
    ).length;
    if (filteredContactsLength) {
      const contactObj = contactsList.filter(
        (eachContact) => eachContact.id === firstLetter,
      )[0];
      const updatedContactsList = contactsList.map((eachContact) => {
        if (eachContact.id === contactObj.id) {
          return {
            id: firstLetter,
            contacts: [...eachContact.contacts, contactData],
          };
        }
        return eachContact;
      });
      updateContact(updatedContactsList);
    } else {
      updateContact((prevState) => {
        const contactArray = [
          ...prevState,
          { id: firstLetter, contacts: [contactData] },
        ];
        const sortedData = contactArray.sort((a, b) =>
          a.id.localeCompare(b.id),
        );
        return sortedData;
      });
    }
  };

  const onToggleSelectContact = (id) => {
    const updatedContactsList = contactsList.map((eachContact) => {
      const userContactList = eachContact.contacts;
      const updatedUserContactsList = userContactList.map((userContact) => {
        if (userContact.id === id) {
          return { ...userContact, isChecked: !userContact.isChecked };
        }
        return userContact;
      });

      return { ...eachContact, contacts: updatedUserContactsList };
    });
    updateContact(updatedContactsList);
  };

  const toggleSelectAllContacts = (value) => {
    const updatedContactsList = contactsList.map((eachContact) => {
      const contactsArray = eachContact.contacts;
      const updatedContactsArray = contactsArray.map((contact) => ({
        ...contact,
        isChecked: value,
      }));
      return { ...eachContact, contacts: updatedContactsArray };
    });
    updateContact(updatedContactsList);
  };

  const onDeleteContacts = () => {
    const updatedContactsList = contactsList
      .map((item) => ({
        ...item,
        contacts: item.contacts.filter((contact) => !contact.isChecked),
      }))
      .filter((item) => item.contacts.length > 0);

    updateContact(updatedContactsList);
  };
  console.log(contactsList);

  return (
    <ContactsContext.Provider
      value={{
        contactsList,
        AddContact,
        onToggleSelectContact,
        toggleSelectAllContacts,
        onDeleteContacts,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<ContactItemDetails />} />
        <Route path="/add-contact" element={<AddContacts />} />
      </Routes>
    </ContactsContext.Provider>
  );
};

export default App;
