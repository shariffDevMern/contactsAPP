import { useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
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
} from "./styledComponents";
import FailureView from '../FailureView'


const ContactItemDetails = () => {
  const contactId = useParams();
  const [editMode, toggleEditMode] = useState(false);
  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList } = value;
        if(contactsList.length!==0){
          const allContactsArray = [];

          contactsList.forEach((eachContact) =>
            allContactsArray.push(...eachContact.contacts),
          );
          const filteredContactsArray = allContactsArray.filter(
            (eachContact) => eachContact.id === contactId.id,
          );
          const contactObj = filteredContactsArray[0];
  
          return (
            <BgContainer>
              <ProfileBackground>
                <Profile bgColor={contactObj.profileBgColor}>
                  {contactObj.name[0].toUpperCase()}
                </Profile>
              </ProfileBackground>
              <UserDetailsContainer>
                <InputForm>
                  <InputContainer>
                    <IoMdContact />
                    <InputBox disabled={!editMode} value={contactObj.name} />
                  </InputContainer>
                  <InputContainer>
                    <FaPhoneFlip />
                    <InputBox disabled={!editMode} value={contactObj.phone} />
                  </InputContainer>
                  <InputContainer>
                    <MdEmail />
                    <InputBox
                      placeholder="Not exists"
                      disabled={!editMode}
                      value={contactObj.email}
                    />
                  </InputContainer>
                </InputForm>
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
              </UserDetailsContainer>
            </BgContainer>
          );
        }

        return(<BgContainer>
          <FailureView/>
        </BgContainer>)
        
      }}
    </ContactsContext.Consumer>
  );
};

export default ContactItemDetails;
