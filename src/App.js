import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "./App.css";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import ContactItemDetails from "./components/ContactItemDetails";
import ContactsContext from './ContactsContext'

const App = () => {
  const [contactsList, updateContact] = useState([
    {
      id: "A",
      contacts: [
        { id: uuidV4(), name: "Abdul" },
        { id: uuidV4(), name: "Akbar" },
        { id: uuidV4(), name: "Ali" },
      ],
    },
    {
      id: "B",
      contacts: [
        { id: uuidV4(), name: "Badu" },
        { id: uuidV4(), name: "Balu" },
        { id: uuidV4(), name: "Bommai" },
      ],
    },
    {
      id: "C",
      contacts: [
        { id: uuidV4(), name: "Cathy" },
        { id: uuidV4(), name: "Charlie" },
        { id: uuidV4(), name: "Cecil" },
      ],
    },
    {
      id: "D",
      contacts: [
        { id: uuidV4(), name: "David" },
        { id: uuidV4(), name: "Dina" },
        { id: uuidV4(), name: "Derek" },
      ],
    },
    {
      id: "E",
      contacts: [
        { id: uuidV4(), name: "Elena" },
        { id: uuidV4(), name: "Eli" },
        { id: uuidV4(), name: "Evan" },
      ],
    },
    // Add remaining letters from F to Y in the same structure...
    {
      id: "Z",
      contacts: [
        { id: uuidV4(), name: "Zara" },
        { id: uuidV4(), name: "Zane" },
        { id: uuidV4(), name: "Zelda" },
      ],
    },
    
  ]);
  return (
    <ContactsContext.Provider value={{contactsList,updateContact}}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts/:id" element={<ContactItemDetails/>}/>
    </Routes>
    </ContactsContext.Provider>
    
  );
};

export default App;
