import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { MdEmail,MdModeEdit } from "react-icons/md";
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
  HeaderMenu,
  HeaderBtn
} from "./styledComponents";
import FailureView from '../FailureView'


const ContactItemDetails = () => {
  const contactId = useParams();
  const navigate = useNavigate();
  
  const getContactsObj = (contactsList) =>{
    const allContactsArray = [];

          contactsList.forEach((eachContact) =>
            allContactsArray.push(...eachContact.contacts),
          );
          const filteredContactsArray = allContactsArray.filter(
            (eachContact) => eachContact.id === contactId.id,
          );
          return(filteredContactsArray[0])
  }
    const goToContacts=()=>{
        navigate('/contacts')
    }
  const [editMode, toggleEditMode] = useState(false);
  const [contactName,updateContactName] = useState(() => {
    const storedContacts = localStorage.getItem("contactsList");
    console.log(storedContacts)
    const contactObj = getContactsObj(JSON.parse(storedContacts))
    return storedContacts ? contactObj.name : '';
  })
  const [phoneNo,updatePhoneNo] = useState(() => {
    const storedContacts = localStorage.getItem("contactsList");
    console.log(storedContacts)
    const contactObj = getContactsObj(JSON.parse(storedContacts))
    return storedContacts ? contactObj.phone : '';
  })
  const [mailId,updateMailId] = useState(() => {
    const storedContacts = localStorage.getItem("contactsList");
    console.log(storedContacts)
    const contactObj = getContactsObj(JSON.parse(storedContacts))
    return storedContacts ? contactObj.email : '';
  })
  const onUpdateContactName = (event) =>
    updateContactName(event.target.value)
  const onUpdatePhoneNo = (event) =>
    updatePhoneNo(event.target.value)
  const onUpdateMailId = (event) =>
    updateMailId(event.target.value)
  
    
  
  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList } = value;
        if(contactsList.length!==0){
          const contactObj = getContactsObj(contactsList);
          const onToggleEditMode = () => {toggleEditMode(prevState=>!prevState)
            updateContactName(contactObj.name)
            updatePhoneNo(contactObj.phone)
            updateMailId(contactObj.email)
          }
          return (
            <BgContainer>
              <ProfileBackground>
                <HeaderMenu>
                <HeaderBtn onClick={goToContacts}>Go back to <IoMdContact/></HeaderBtn>
                <HeaderBtn onClick={onToggleEditMode}>{!editMode?"Edit":"Cancel"} <MdModeEdit/></HeaderBtn>
                </HeaderMenu>
                <Profile bgColor={contactObj.profileBgColor}>
                  {contactObj.name[0].toUpperCase()}
                </Profile>
              </ProfileBackground>
              <UserDetailsContainer>
                <InputForm>
                  <InputContainer>
                    <IoMdContact />
                    <InputBox required onChange={onUpdateContactName} disabled={!editMode} value={contactName} />
                  </InputContainer>
                  <InputContainer>
                    <FaPhoneFlip />
                    <InputBox required onChange={onUpdatePhoneNo} type="number" disabled={!editMode} value={phoneNo} />
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
