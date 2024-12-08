import { HiSpeakerWave, HiMiniVideoCamera } from "react-icons/hi2";
import { BsMicMuteFill } from "react-icons/bs";
import { IoRecording } from "react-icons/io5";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { IoIosKeypad } from "react-icons/io";
import { useState } from "react";
import {
  ModalContainer,
  NameContainer,
  CallerName,
  CallFeaturesContainer,
  CallFeatureButton,
} from "./styledComponents";
import ContactsContext from "../../ContactsContext";

const callFeaturesList = [
  { id: "SPEAKER", icon: HiSpeakerWave },
  { id: "VIDEO", icon: HiMiniVideoCamera },
  { id: "MUTE", icon: BsMicMuteFill },
  { id: "KEYPAD", icon: IoIosKeypad },
  { id: "CUTCALL", icon: PiPhoneDisconnectFill },
  { id: "RECORD", icon: IoRecording },
];

const CallModal = (props) => {
  const { callDetails, closingFunc } = props;
  const { dialedNumber } = callDetails;
  const [userName, updateUserName] = useState("");

  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList } = value;
        const matchedContacts = [];
        if (contactsList.length !== 0 || contactsList !== null) {
          contactsList.forEach((group) => {
            const matchingContacts = group.contacts.filter(
              (contact) => contact.phone === dialedNumber,
            );
            matchedContacts.push(...matchingContacts);
          });

          if (matchedContacts.length !== 0) {
            if (matchedContacts.length > 1) {
              updateUserName(() => {
                return matchedContacts.reduce(
                  (accum, current) => accum.name + " or " + current.name,
                );
              });
            } else {
              updateUserName(matchedContacts[0].name);
            }
          }
        }
        return (
          <ModalContainer>
            <NameContainer>
              <CallerName>
                <span>Calling</span>
                <br />
                <span>Mobile</span>
                <br />
                {userName !== "" ? userName : dialedNumber}
              </CallerName>
            </NameContainer>
            <CallFeaturesContainer>
              {callFeaturesList.map((eachIcon) => {
                return (
                  <CallFeatureButton
                    onClick={
                      eachIcon.id === "CUTCALL" ? () => closingFunc() : null
                    }
                    bgColor={eachIcon.id}
                    key={eachIcon.id}
                  >
                    <eachIcon.icon />
                  </CallFeatureButton>
                );
              })}
            </CallFeaturesContainer>
          </ModalContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default CallModal;
