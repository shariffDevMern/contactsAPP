import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { MdEmail, MdModeEdit } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaVideo, FaRegStar, FaStar } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import ContactsContext from "../../ContactsContext";
import { BgContainer } from "../../styledComponents";
import {
  ProfileBackground,
  Profile,
  UserDetailsContainer,
  InputContainer,
  InputBox,
  FeaturesContainer,
  FeatureButton,
  InputForm,
  HeaderMenu,
  HeaderBtn,
  SaveButton,
  FavoriteButton,
} from "./styledComponents";
import FailureView from "../FailureView";

const ContactItemDetails = () => {
  const contactId = useParams();
  const navigate = useNavigate();

  const getContactsObj = (contactsList) => {
    const allContactsArray = [];

    contactsList.forEach((eachContact) =>
      allContactsArray.push(...eachContact.contacts),
    );
    const filteredContactsArray = allContactsArray.filter(
      (eachContact) => eachContact.id === contactId.id,
    );
    return filteredContactsArray[0];
  };
  const goToContacts = () => {
    navigate("/contacts");
  };
  const [editMode, toggleEditMode] = useState(false);
  const [contactName, updateContactName] = useState(() => {
    const storedContacts = localStorage.getItem("contactsList");

    if (storedContacts === null) {
      return "";
    } else if (storedContacts.length === 0) {
      return "";
    } else {
      const contactObj = getContactsObj(JSON.parse(storedContacts));
      return contactObj !== undefined ? contactObj.name : "";
    }
  });
  const [phoneNo, updatePhoneNo] = useState(() => {
    const storedContacts = localStorage.getItem("contactsList");

    if (storedContacts === null) {
      return "";
    } else if (storedContacts.length === 0) {
      return "";
    } else {
      const contactObj = getContactsObj(JSON.parse(storedContacts));
      return contactObj !== undefined ? contactObj.phone : "";
    }
  });
  const [mailId, updateMailId] = useState(() => {
    const storedContacts = localStorage.getItem("contactsList");

    if (storedContacts === null) {
      return "";
    } else if (storedContacts.length === 0) {
      return "";
    } else {
      const contactObj = getContactsObj(JSON.parse(storedContacts));
      return contactObj !== undefined ? contactObj.email : "";
    }
  });
  const onUpdateContactName = (event) => updateContactName(event.target.value);
  const onUpdatePhoneNo = (event) => updatePhoneNo(event.target.value);
  const onUpdateMailId = (event) => updateMailId(event.target.value);

  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList, updateContact } = value;
        if (contactsList.length !== 0) {
          const contactObj = getContactsObj(contactsList);
          console.log(contactObj);

          if (contactObj !== undefined) {
            const onToggleEditMode = () => {
              toggleEditMode((prevState) => !prevState);
              updateContactName(contactObj.name);
              updatePhoneNo(contactObj.phone);
              updateMailId(contactObj.email);
            };

            const onEditContact = (event) => {
              event.preventDefault(); // Prevent the default form submission behavior

              const storedContacts = JSON.parse(
                localStorage.getItem("contactsList"),
              );

              if (storedContacts !== null) {
                const originalContactObj = getContactsObj(storedContacts);

                const originalFirstLetter =
                  originalContactObj.name[0].toUpperCase();
                const updatedFirstLetter = contactName[0].toUpperCase();

                let updatedContactsList;

                if (originalFirstLetter === updatedFirstLetter) {
                  // If the first letter hasn't changed, update the contact in the same section
                  updatedContactsList = storedContacts.map((section) => {
                    if (section.id === originalFirstLetter) {
                      return {
                        ...section,
                        contacts: section.contacts.map((contact) =>
                          contact.id === originalContactObj.id
                            ? {
                                ...contact,
                                name: contactName,
                                phone: phoneNo,
                                email: mailId,
                              }
                            : contact,
                        ),
                      };
                    }
                    return section;
                  });
                } else {
                  // If the first letter has changed, move the contact to the correct section
                  updatedContactsList = storedContacts.map((section) => {
                    if (section.id === originalFirstLetter) {
                      // Remove the contact from the old section
                      return {
                        ...section,
                        contacts: section.contacts.filter(
                          (contact) => contact.id !== originalContactObj.id,
                        ),
                      };
                    } else if (section.id === updatedFirstLetter) {
                      // Add the contact to the new section
                      return {
                        ...section,
                        contacts: [
                          ...section.contacts,
                          {
                            ...originalContactObj,
                            name: contactName,
                            phone: phoneNo,
                            email: mailId,
                          },
                        ],
                      };
                    }
                    return section;
                  });

                  // If the new section doesn't exist, create it
                  const sectionExists = updatedContactsList.some(
                    (section) => section.id === updatedFirstLetter,
                  );

                  if (!sectionExists) {
                    updatedContactsList.push({
                      id: updatedFirstLetter,
                      contacts: [
                        {
                          ...originalContactObj,
                          name: contactName,
                          phone: phoneNo,
                          email: mailId,
                        },
                      ],
                    });
                  }
                }

                // Filter out empty sections
                updatedContactsList = updatedContactsList.filter(
                  (section) => section.contacts.length > 0,
                );

                // Update the state and local storage
                updateContact(updatedContactsList);
                localStorage.setItem(
                  "contactsList",
                  JSON.stringify(updatedContactsList),
                );
                toggleEditMode(false); // Exit edit mode
                // Navigate back to the contacts list
              } else {
                window.location.reload();
              }
            };

            const onToggleFavorite = () => {
              updateContact((prevState) => {
                return prevState.map((group) => ({
                  ...group,
                  contacts: group.contacts.map((contact) =>
                    contact.id === contactObj.id
                      ? { ...contact, isFavorite: !contact.isFavorite }
                      : contact,
                  ),
                }));
              });
            };

            return (
              <BgContainer>
                <ProfileBackground>
                  <HeaderMenu>
                    <HeaderBtn onClick={goToContacts}>
                      Go back to <IoMdContact />
                    </HeaderBtn>
                    <HeaderBtn onClick={onToggleEditMode}>
                      {!editMode ? "Edit" : "Cancel"} <MdModeEdit />
                    </HeaderBtn>
                  </HeaderMenu>
                  <Profile bgColor={contactObj.profileBgColor}>
                    {contactObj.name[0].toUpperCase()}
                  </Profile>
                  <FavoriteButton onClick={onToggleFavorite}>
                    {contactObj.isFavorite ? <FaStar /> : <FaRegStar />}
                    {contactObj.isFavorite ? "Remove Favorite" : "Favorite"}
                  </FavoriteButton>
                </ProfileBackground>
                <UserDetailsContainer>
                  <InputForm onSubmit={onEditContact}>
                    <InputContainer>
                      <IoMdContact />
                      <InputBox
                        required
                        onChange={onUpdateContactName}
                        disabled={!editMode}
                        value={contactName}
                      />
                    </InputContainer>
                    <InputContainer>
                      <FaPhoneFlip />
                      <InputBox
                        required
                        onChange={onUpdatePhoneNo}
                        type="number"
                        disabled={!editMode}
                        value={phoneNo}
                      />
                    </InputContainer>
                    <InputContainer>
                      <MdEmail />
                      <InputBox
                        onChange={onUpdateMailId}
                        placeholder="Not exists"
                        disabled={!editMode}
                        value={mailId}
                      />
                    </InputContainer>
                    {editMode && <SaveButton type="submit">Save</SaveButton>}
                  </InputForm>
                  {!editMode && (
                    <FeaturesContainer>
                      <FeatureButton>
                        <RiMessage2Fill />
                        <br />
                        Message
                      </FeatureButton>
                      <FeatureButton>
                        <FaPhoneFlip />
                        <br />
                        Call
                      </FeatureButton>
                      <FeatureButton>
                        <FaVideo />
                        <br />
                        Video
                      </FeatureButton>
                      <FeatureButton>
                        <MdEmail />
                        <br />
                        Mail
                      </FeatureButton>
                    </FeaturesContainer>
                  )}
                </UserDetailsContainer>
              </BgContainer>
            );
          }
          return (
            <BgContainer>
              <FailureView />
            </BgContainer>
          );
        }

        return (
          <BgContainer>
            <FailureView />
          </BgContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default ContactItemDetails;
