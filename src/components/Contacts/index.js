import { useState } from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCheckbox } from "react-icons/io5";
import { TbCalendarSad } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { FaRegPlusSquare } from "react-icons/fa";
import {
  MdOutlineSelectAll,
  MdDeselect,
  MdDelete,
  MdCancel,
} from "react-icons/md";
import ContactsContext from "../../ContactsContext";
import { BgContainer, Header, MenuHeader } from "../../styledComponents";
import {
  ContactsListSection,
  SearchInput,
  SearchContainer,
  ContactsListContainer,
  NoMatchBg,
  EmptyText,
  SelectContainer,
  SelectContactsBtn,
  DeleteBtn,
  NoContactsContainer,
  NoContactText,
  AddContactBtn,
} from "./styledComponents";
import Footer from "../Footer";
import ContactsList from "../ContactsList";
import AlphabetSideBar from "../AlphabetSideBar";
import ContactCard from "../ContactCard";



const Contacts = () => {
  const [searchVal, changeSearchVal] = useState("");
  const [isSelectOptionChecked, toggleSelectOption] = useState(false);
  const [isSelectAllChecked, toggleSelectAll] = useState(false);

  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList, toggleSelectAllContacts } = value;
        const onChangeSearchVal = (event) => {
          changeSearchVal(event.target.value);
        };

        const OnToggleSelectOption = () => {
          toggleSelectAllContacts(false);
          toggleSelectOption((prevState) => !prevState);
          toggleSelectAll(false);
        };

        const onToggleSelectAll = () => {
          toggleSelectAll((prevState) => !prevState);
          if (!isSelectAllChecked) {
            toggleSelectAllContacts(true);
          } else {
            toggleSelectAllContacts(false);
          }
        };

        const renderNoMatchView = () => (
          <NoMatchBg>
            <TbCalendarSad />
            <EmptyText>No Match Found!</EmptyText>
          </NoMatchBg>
        );

        const renderNoContacsView = () => (
          <NoContactsContainer>
            <NoContactText>
              <FiBookOpen />
              No Contacts To Show
            </NoContactText>

            <Link to="/add-contact" className="link">
              <AddContactBtn>
                <FaRegPlusSquare /> Add Contact
              </AddContactBtn>
            </Link>
          </NoContactsContainer>
        );

        const allContactsArray = [];

        contactsList.forEach((eachContact) =>
          allContactsArray.push(...eachContact.contacts),
        );

        const filteredContactsArray = allContactsArray.filter((eachContact) => {
          return eachContact.name
            .toLowerCase()
            .includes(searchVal.toLowerCase());
        });

        return (
          <BgContainer>
            <Header>
              <MenuHeader>Contacts</MenuHeader>
              {!isSelectOptionChecked && (
                <Link to="/add-contact" className="link">
                  <CiCirclePlus />
                </Link>
              )}
            </Header>
            <ContactsListSection>
              {contactsList.length === 0 ? (
                renderNoContacsView()
              ) : (
                <>
                  <SearchContainer>
                    <SearchInput
                      onChange={onChangeSearchVal}
                      value={searchVal}
                      placeholder="Search"
                    />

                    <FaMagnifyingGlass />
                  </SearchContainer>
                  <SelectContainer>
                    <SelectContactsBtn
                      onClick={OnToggleSelectOption}
                      isSelected={isSelectOptionChecked}
                    >
                      {isSelectOptionChecked ? <MdCancel /> : <IoCheckbox />}
                      {isSelectOptionChecked ? "Cancel" : "Select"}
                    </SelectContactsBtn>
                    {isSelectOptionChecked ? (
                      <>
                        {isSelectAllChecked ? (
                          <SelectContactsBtn onClick={onToggleSelectAll}>
                            <MdDeselect />
                            Deselect All
                          </SelectContactsBtn>
                        ) : (
                          <SelectContactsBtn onClick={onToggleSelectAll}>
                            <MdOutlineSelectAll />
                            Select All
                          </SelectContactsBtn>
                        )}

                        <DeleteBtn>
                          <MdDelete />
                        </DeleteBtn>
                      </>
                    ) : null}
                  </SelectContainer>

                  <hr />
                  {!isSelectOptionChecked&&<AlphabetSideBar />}
                  
                  <ContactsListContainer>
                    {searchVal.length > 0
                      ? filteredContactsArray.length > 0
                        ? filteredContactsArray.map((eachContact) => (
                            <ContactCard
                              isSelectOptionChecked={isSelectOptionChecked}
                              key={eachContact.id}
                              contactObj={eachContact}
                            />
                          ))
                        : renderNoMatchView()
                      : contactsList.map((eachContact) => (
                          <ContactsList
                            isSelectOptionChecked={isSelectOptionChecked}
                            key={eachContact.id}
                            contactData={eachContact}
                          />
                        ))}
                  </ContactsListContainer>
                </>
              )}
            </ContactsListSection>
            <Footer />
          </BgContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default Contacts;
