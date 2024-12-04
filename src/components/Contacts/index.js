import { useState } from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCheckbox } from "react-icons/io5";
import { TbCalendarSad } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { FaRegPlusSquare } from "react-icons/fa";
import Popup from "reactjs-popup";
import Cookies from "js-cookie";
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
  PopUpContainer,
  AlertMessage,
  AlertBtnContainer,
  AlertButton,
  ContactContainer,
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
        const {
          contactsList,
          toggleSelectAllContacts,
          onDeleteContacts,
          selectedContacts,
        } = value;
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

        const deleteContacts = () => {
          onDeleteContacts();
          toggleSelectAll(false);
          toggleSelectOption(false);
        };

        const removePhoneNumber = () => {
          Cookies.remove("phoneNo");
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
              <AddContactBtn onClick={removePhoneNumber}>
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
          return (
            eachContact.name.toLowerCase().includes(searchVal.toLowerCase()) ||
            eachContact.phone.includes(searchVal.toLowerCase())
          );
        });

        return (
          <BgContainer>
            <ContactContainer>
              <Header>
                <MenuHeader>Contacts</MenuHeader>
                {!isSelectOptionChecked ? (
                  <Link to="/add-contact" className="link">
                    <CiCirclePlus onClick={removePhoneNumber} />
                  </Link>
                ) : (
                  selectedContacts.length !== 0 && (
                    <Popup
                      modal
                      trigger={
                        <DeleteBtn>
                          <MdDelete />
                        </DeleteBtn>
                      }
                      position="bottom left"
                    >
                      {(close) => (
                        <>
                          <PopUpContainer>
                            <AlertMessage>
                              {selectedContacts.length} contact
                              {selectedContacts.length > 1 && "s"} will be
                              deleted.
                            </AlertMessage>
                            <AlertBtnContainer>
                              <AlertButton
                                onClick={() => close(deleteContacts())}
                                delete
                              >
                                Delete
                              </AlertButton>
                              <AlertButton
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                              >
                                Cancel
                              </AlertButton>
                            </AlertBtnContainer>
                          </PopUpContainer>
                        </>
                      )}
                    </Popup>
                  )
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
                        </>
                      ) : null}
                    </SelectContainer>

                    <hr />
                    {!isSelectOptionChecked && <AlphabetSideBar />}

                    <ContactsListContainer>
                      {searchVal.length > 0
                        ? filteredContactsArray.length > 0
                          ? filteredContactsArray.map((eachContact) =>
                              isSelectOptionChecked ? (
                                <ContactCard
                                  key={eachContact.id}
                                  contactObj={eachContact}
                                />
                              ) : (
                                <Link
                                  className="link"
                                  to={`/contacts/${eachContact.id}`}
                                >
                                  <ContactCard
                                    key={eachContact.id}
                                    contactObj={eachContact}
                                  />
                                </Link>
                              ),
                            )
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
            </ContactContainer>
          </BgContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default Contacts;
