import { useState } from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ContactsContext from "../../ContactsContext";
import { BgContainer, Header, MenuHeader } from "../../styledComponents";
import { TbCalendarSad } from "react-icons/tb";
import {
  ContactsListSection,
  SearchInput,
  SearchContainer,
  ContactsListContainer,
  NoMatchBg,
  EmptyText,
} from "./styledComponents";
import Footer from "../Footer";
import ContactsList from "../ContactsList";
import AlphabetSideBar from "../AlphabetSideBar";
import ContactCard from "../ContactCard";

const profileBgList = [
  "#acf5b0",
  "#e94488",
  "#01d403",
  "#2bd550",
  "#9bfa8e",
  "#43e21f",
  "#12b9bf",
  "#f0ce8f",
  "#e3681e",
  "#99b728",
  "#ef9072",
  "#67f61e",
  "#dc00de",
  "#b95906",
  "#d18c5f",
  "#d09063",
  "#615c50",
  "#df015e",
  "#c7f453",
  "#7211a2",
  "#8fa202",
  "#791f6e",
  "#3c2242",
  "#a66161",
  "#e37bbe",
  "#26d7c6",
  "#6afa96",
  "#187bda",
  "#29686f",
  "#f190ed",
];

const Contacts = () => {
  const [searchVal, changeSearchVal] = useState("");

  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList } = value;
        const onChangeSearchVal = (event) => {
          changeSearchVal(event.target.value);
        };

        const renderNoMatchView = () => (
          <NoMatchBg>
            <TbCalendarSad />
            <EmptyText>No Match Found!</EmptyText>
          </NoMatchBg>
        );

        const allContactsArray = [];

        contactsList.forEach((eachContact) =>
          allContactsArray.push(...eachContact.contacts),
        );
        const filteredContactsArray = allContactsArray.filter((eachContact) =>
          eachContact.name.toLowerCase().includes(searchVal.toLowerCase()),
        );

        return (
          <BgContainer>
            <Header>
              <MenuHeader>Contacts</MenuHeader>
              <Link to="/add-contact" className="link">
                <CiCirclePlus />
              </Link>
            </Header>
            <ContactsListSection>
              <SearchContainer>
                <SearchInput
                  onChange={onChangeSearchVal}
                  value={searchVal}
                  placeholder="Search"
                />

                <FaMagnifyingGlass />
              </SearchContainer>

              <hr />
              <AlphabetSideBar />
              <ContactsListContainer>
                {searchVal.length > 0
                  ? filteredContactsArray.length > 0
                    ? filteredContactsArray.map((eachContact) => (
                        <Link
                          key={eachContact.id}
                          className="link"
                          to={`/contacts/${eachContact.id}`}
                        >
                          <ContactCard
                            randomColor={profileBgList[5]}
                            contactObj={eachContact}
                          />
                        </Link>
                      ))
                    : renderNoMatchView()
                  : contactsList.map((eachContact) => (
                      <ContactsList
                        key={eachContact.id}
                        contactData={eachContact}
                      />
                    ))}
              </ContactsListContainer>
            </ContactsListSection>
            <Footer />
          </BgContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default Contacts;
