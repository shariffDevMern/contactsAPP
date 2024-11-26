import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "./App.css";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import ContactItemDetails from "./components/ContactItemDetails";
import AddContacts from "./components/AddContacts";
import ContactsContext from "./ContactsContext";

const App = () => {
  const [contactsList, updateContact] = useState([
    {
      id: "A",
      contacts: [
        {
          id: uuidV4(),
          name: "Abdul",
          phone: "9854321670",
          profileBgColor: "#acf5b0",
          email: "abdul@example.com",
        },
        {
          id: uuidV4(),
          name: "Akbar",
          phone: "9865432198",
          profileBgColor: "#e94488",
          email: "akbar@example.com",
        },
        {
          id: uuidV4(),
          name: "Ali",
          phone: "9845123456",
          profileBgColor: "#01d403",
          email: "ali@example.com",
        },
      ],
    },
    {
      id: "B",
      contacts: [
        {
          id: uuidV4(),
          name: "Badu",
          phone: "9876543210",
          profileBgColor: "#2bd550",
          email: "badu@example.com",
        },
        {
          id: uuidV4(),
          name: "Balu",
          phone: "9867123456",
          profileBgColor: "#9bfa8e",
          email: "balu@example.com",
        },
        {
          id: uuidV4(),
          name: "Bommai",
          phone: "9845698712",
          profileBgColor: "#43e21f",
          email: "bommai@example.com",
        },
      ],
    },
    {
      id: "C",
      contacts: [
        {
          id: uuidV4(),
          name: "Cathy",
          phone: "9867123459",
          profileBgColor: "#12b9bf",
          email: "cathy@example.com",
        },
        {
          id: uuidV4(),
          name: "Charlie",
          phone: "9856471230",
          profileBgColor: "#f0ce8f",
          email: "charlie@example.com",
        },
        {
          id: uuidV4(),
          name: "Cecil",
          phone: "9845671234",
          profileBgColor: "#e3681e",
          email: "cecil@example.com",
        },
      ],
    },
    {
      id: "D",
      contacts: [
        {
          id: uuidV4(),
          name: "David",
          phone: "9876512345",
          profileBgColor: "#99b728",
          email: "david@example.com",
        },
        {
          id: uuidV4(),
          name: "Dina",
          phone: "9867543219",
          profileBgColor: "#ef9072",
          email: "dina@example.com",
        },
        {
          id: uuidV4(),
          name: "Derek",
          phone: "9845123789",
          profileBgColor: "#67f61e",
          email: "derek@example.com",
        },
      ],
    },
    {
      id: "E",
      contacts: [
        {
          id: uuidV4(),
          name: "Elena",
          phone: "9845612378",
          profileBgColor: "#dc00de",
          email: "elena@example.com",
        },
        {
          id: uuidV4(),
          name: "Eli",
          phone: "9865473219",
          profileBgColor: "#b95906",
          email: "eli@example.com",
        },
        {
          id: uuidV4(),
          name: "Evan",
          phone: "9876542198",
          profileBgColor: "#d18c5f",
          email: "evan@example.com",
        },
      ],
    },
    // Add remaining letters from F to Y in the same structure...
    {
      id: "Z",
      contacts: [
        {
          id: uuidV4(),
          name: "Zara",
          phone: "9845123678",
          profileBgColor: "#d09063",
          email: "zara@example.com",
        },
        {
          id: uuidV4(),
          name: "Zane",
          phone: "9865478123",
          profileBgColor: "#615c50",
          email: "zane@example.com",
        },
        {
          id: uuidV4(),
          name: "Zelda",
          phone: "9876512347",
          profileBgColor: "#df015e",
          email: "zelda@example.com",
        },
      ],
    },
  ]);

  const navigate = useNavigate();

  console.log(contactsList);

  const AddContact = (contactData) => {
    const firstLetter = contactData.name[0].toUpperCase();
    const filteredContactsLength = contactsList.filter(
      (eachContact) => eachContact.id === firstLetter,
    ).length;
    if (filteredContactsLength) {
      console.log("summa");
      const contactObj = contactsList.filter(
        (eachContact) => eachContact.id === firstLetter,
      )[0];
      console.log(contactObj);
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

    navigate("/contacts");
  };

  return (
    <ContactsContext.Provider value={{ contactsList, AddContact }}>
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
