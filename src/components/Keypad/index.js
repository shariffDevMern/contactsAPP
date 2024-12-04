import { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import { FaPhoneFlip } from "react-icons/fa6";
import ContactCard from '../ContactCard'
import ContactsContext from "../../ContactsContext";
import { BgContainer } from "../../styledComponents";
import Footer from "../Footer";
import {
  KeypadSectionBg,
  FooterContainer,
  KeypadContainer,
  NumberInput,
  Dialer,
  DialerButton,
  NumberContainer,
  EraseButton,
  ContactsListContainer,
  CallContainer,
  AddContactButton,
  AddBtnContainer
} from "./styledComponents";

const dialerList = [
  { id: 1, value: "1" },
  { id: 2, value: "2" },
  { id: 3, value: "3" },
  { id: 4, value: "4" },
  { id: 5, value: "5" },
  { id: 6, value: "6" },
  { id: 7, value: "7" },
  { id: 8, value: "8" },
  { id: 9, value: "9" },
  {id:'*',value:"*"},
  { id: 0, value: "0" },
  {id:'#',value:"#"},
  
];
// const soundList = [
//   "/dial-sound-1.mp3",
//   "/dial-sound-2.mp3",
//   "/dial-sound-3.mp3",
//   "/dial-sound-4.mp3",
//   "/dial-sound-5.mp3",
//   "/dial-sound-6.mp3",
//   "/dial-sound-7.mp3",
//   "/dial-sound-8.mp3",
// ];

const Keypad = () => {
  const [dialedNumber, updateDialedNumber] = useState("");
  const onEraseNumber = () =>{
    updateDialedNumber(prevState=>prevState.slice(0,prevState.length-1))
  }
  const onStoreNumberInCookies = () =>{
    Cookies.set('phoneNo',dialedNumber,{expires:1})
  }

  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList } = value;
        console.log(contactsList)
        const matchedContacts = []
        if(contactsList.length!==0 || contactsList!==null){
         

    contactsList.forEach(group => {
        const matchingContacts = group.contacts.filter(contact =>
            contact.phone.includes(dialedNumber)
        );
        matchedContacts.push(...matchingContacts);
    });
          
        }
        
        

        
        return (
          <BgContainer>
            <KeypadSectionBg>
              {dialedNumber.length>0 && <ContactsListContainer>
              {matchedContacts.map(eachContact=>{
                const addNumberToInput= () =>{
                  updateDialedNumber(eachContact.phone)
                  console.log(eachContact.phone)
                }
                return <div key={eachContact.id} onClick={addNumberToInput}><ContactCard   contactObj={eachContact}/></div>})}
              </ContactsListContainer>}
              {dialedNumber.length>0 && matchedContacts.length===0 && <AddBtnContainer>
                <Link to="/add-contact" className="link">
              <AddContactButton onClick={onStoreNumberInCookies}>
                  Add to Contacts
              </AddContactButton>
              </Link>
              </AddBtnContainer>}
              
              
              <KeypadContainer>
                <NumberContainer>
                  <NumberInput value={dialedNumber} />
                  {dialedNumber.length>0 && <EraseButton onClick={onEraseNumber}><RiDeleteBack2Fill/></EraseButton>}
                  
                </NumberContainer>
                <Dialer>
                  {dialerList.map((eachNumber) => {
                    

                    const onClickButton = (event) => {
                      updateDialedNumber(
                        (prevState) => prevState + event.target.value,
                      );
                      
                    };

                    return (
                      <DialerButton
                        onClick={onClickButton}
                        value={eachNumber.value}
                        key={eachNumber.id}
                      >
                        {eachNumber.value}
                      </DialerButton>
                    );
                  })}
                </Dialer>
                <CallContainer>
                    <FaPhoneFlip/>
                </CallContainer>
              </KeypadContainer>
              <FooterContainer>
                <Footer />
              </FooterContainer>
            </KeypadSectionBg>
          </BgContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default Keypad;
