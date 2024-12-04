import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import ContactItemDetails from "./components/ContactItemDetails";
import AddContacts from "./components/AddContacts";
import Keypad from "./components/Keypad";
import ContactsContext from "./ContactsContext";

const App = () => {
  // Retrieve contacts from local storage or initialize with an empty array
  const [contactsList, updateContact] = useState(() => {
    const storedContacts = localStorage.getItem("contactsList");
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  console.log(contactsList);
  const [selectedContacts, updateSelectedContacts] = useState([]);

  // Function to update local storage whenever contactsList changes
  const updateLocalStorage = (updatedList) => {
    localStorage.setItem("contactsList", JSON.stringify(updatedList));
  };

  const AddContact = (contactData) => {
    const firstLetter = contactData.name[0].toUpperCase();
    const filteredContactsLength = contactsList.filter(
      (eachContact) => eachContact.id === firstLetter,
    ).length;

    if (filteredContactsLength) {
      const contactObj = contactsList.find(
        (eachContact) => eachContact.id === firstLetter,
      );
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
      updateLocalStorage(updatedContactsList); // Update local storage
    } else {
      updateContact((prevState) => {
        const contactArray = [
          ...prevState,
          { id: firstLetter, contacts: [contactData] },
        ];
        const sortedData = contactArray.sort((a, b) =>
          a.id.localeCompare(b.id),
        );
        updateLocalStorage(sortedData); // Update local storage
        return sortedData;
      });
    }
  };

  const onToggleSelectContact = (id) => {
    let selectedArray = [];
    const updatedContactsList = contactsList.map((eachContact) => {
      const userContactList = eachContact.contacts;
      const updatedUserContactsList = userContactList.map((userContact) => {
        if (userContact.id === id) {
          return { ...userContact, isChecked: !userContact.isChecked };
        }
        return userContact;
      });
      updatedUserContactsList.forEach((each) => {
        if (each.isChecked === true) {
          selectedArray.push(each.id);
        }
      });
      return { ...eachContact, contacts: updatedUserContactsList };
    });
    updateContact(updatedContactsList);
    updateSelectedContacts(selectedArray);
    // Update local storage
  };

  const toggleSelectAllContacts = (value) => {
    const emptyArray = [];
    const updatedContactsList = contactsList.map((eachContact) => {
      const contactsArray = eachContact.contacts;
      const updatedContactsArray = contactsArray.map((contact) => {
        emptyArray.push(contact.id);
        return { ...contact, isChecked: value };
      });
      return { ...eachContact, contacts: updatedContactsArray };
    });
    updateContact(updatedContactsList);
    if (value) {
      updateSelectedContacts(emptyArray);
    } else {
      updateSelectedContacts([]);
    }
    // Update local storage
  };

  const onDeleteContacts = () => {
    const updatedContactsList = contactsList
      .map((item) => ({
        ...item,
        contacts: item.contacts.filter((contact) => !contact.isChecked),
      }))
      .filter((item) => item.contacts.length > 0);

    updateContact(updatedContactsList);
    updateLocalStorage(updatedContactsList); // Update local storage
  };

  return (
    <ContactsContext.Provider
      value={{
        contactsList,
        selectedContacts,
        AddContact,
        onToggleSelectContact,
        toggleSelectAllContacts,
        onDeleteContacts,
        updateContact,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<ContactItemDetails />} />
        <Route path="/add-contact" element={<AddContacts />} />
        <Route path="/keypad" element={<Keypad />} />
      </Routes>
    </ContactsContext.Provider>
  );
};

export default App;
