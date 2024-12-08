import { HiSpeakerWave, HiMiniVideoCamera } from "react-icons/hi2";
import { BsMicMuteFill } from "react-icons/bs";
import { IoRecording } from "react-icons/io5";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { IoIosKeypad } from "react-icons/io";
import { useEffect, useState } from "react";
import {
  ModalContainer,
  NameContainer,
  CallerName,
  CallFeaturesContainer,
  CallFeatureButton,
} from "./styledComponents";
import ContactsContext from "../../ContactsContext";

const callerSoundList = [
  { callerSound: "/call-effect-1(11-sec).mp3", duration: 11 },
  { callerSound: "/call-effect-2(39-sec).mp3", duration: 39 },
  { callerSound: "/call-effect-3(12-sec).mp3", duration: 12 },
];

const callFeaturesList = [
  { id: "SPEAKER", icon: HiSpeakerWave },
  { id: "VIDEO", icon: HiMiniVideoCamera },
  { id: "MUTE", icon: BsMicMuteFill },
  { id: "KEYPAD", icon: IoIosKeypad },
  { id: "CUTCALL", icon: PiPhoneDisconnectFill },
  { id: "RECORD", icon: IoRecording },
];

let sound;
let timerId;

const CallModal = (props) => {
  const { callDetails, closingFunc } = props;
  const { dialedNumber } = callDetails;
  const [userName, updateUserName] = useState("");

  useEffect(() => {
    // Initialize and play sound

    const randomIndex = Math.floor(Math.random() * callerSoundList.length);
    timerId = setTimeout(
      () => closingFunc(),
      (callerSoundList[randomIndex].duration - 0.5) * 1000,
    );
    sound = new Audio(callerSoundList[randomIndex].callerSound);
    sound.loop = true; // Ensure the sound loops if the call duration is uncertain
    sound.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });

    // Cleanup audio when the component unmounts
    return () => {
      if (sound) {
        sound.pause();
        sound.currentTime = 0;
        clearTimeout(timerId);
      }
    };
  });

  const cutCall = () => {
    if (sound) {
      clearTimeout(timerId);
      sound.pause();
      sound.currentTime = 0;
    }
  };

  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList } = value;
        const matchedContacts = [];
        if (contactsList?.length) {
          contactsList.forEach((group) => {
            const matchingContacts = group.contacts.filter(
              (contact) => contact.phone === dialedNumber,
            );
            matchedContacts.push(...matchingContacts);
          });

          if (matchedContacts.length > 0) {
            if (matchedContacts.length > 1) {
              updateUserName(() =>
                matchedContacts.map((contact) => contact.name).join(" or "),
              );
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
                {userName || dialedNumber}
              </CallerName>
            </NameContainer>
            <CallFeaturesContainer>
              {callFeaturesList.map((eachIcon) => (
                <CallFeatureButton
                  onClick={
                    eachIcon.id === "CUTCALL"
                      ? () => {
                          cutCall();
                          closingFunc();
                        }
                      : null
                  }
                  bgColor={eachIcon.id}
                  key={eachIcon.id}
                >
                  <eachIcon.icon />
                </CallFeatureButton>
              ))}
            </CallFeaturesContainer>
          </ModalContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default CallModal;
