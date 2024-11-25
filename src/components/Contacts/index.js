import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { CiCirclePlus } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BgContainer, Header, MenuHeader } from "../../styledComponents";
import {
  ContactsListSection,
  SearchInput,
  SearchContainer,
  ContactsListContainer,
} from "./styledComponents";
import Footer from "../Footer";
import ContactsList from "../ContactsList";

const Contacts = () => {
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
    {
      id: "Z",
      contacts: [
        { id: uuidV4(), name: "Zara" },
        { id: uuidV4(), name: "Zane" },
        { id: uuidV4(), name: "Zelda" },
      ],
    },
    {
      id: "Z",
      contacts: [
        { id: uuidV4(), name: "Zara" },
        { id: uuidV4(), name: "Zane" },
        { id: uuidV4(), name: "Zelda" },
      ],
    },
    {
      id: "Z",
      contacts: [
        { id: uuidV4(), name: "Zara" },
        { id: uuidV4(), name: "Zane" },
        { id: uuidV4(), name: "Zelda" },
      ],
    },
    {
      id: "Z",
      contacts: [
        { id: uuidV4(), name: "Zara" },
        { id: uuidV4(), name: "Zane" },
        { id: uuidV4(), name: "Zelda" },
      ],
    },
  ]);

  updateContact = () =>{
    console.log("updated")
  }

  return (
    <BgContainer>
      <Header>
        <MenuHeader>Contacts</MenuHeader>
        <CiCirclePlus />
      </Header>
      <ContactsListSection>
        <SearchContainer>
          <SearchInput placeholder="Search" />
          <FaMagnifyingGlass />
        </SearchContainer>
        <hr />
        <ContactsListContainer>
          {contactsList.map((eachContact) => (
            <ContactsList key={eachContact.id} contactData={eachContact} />
          ))}
        </ContactsListContainer>
      </ContactsListSection>
      <Footer />
    </BgContainer>
  );
};

export default Contacts;
