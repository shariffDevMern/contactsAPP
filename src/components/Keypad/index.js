import { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
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
  EraseButton
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
  { id: 0, value: "0" },
];
const soundList = [
  "/dial-sound-1.mp3",
  "/dial-sound-2.mp3",
  "/dial-sound-3.mp3",
  "/dial-sound-4.mp3",
  "/dial-sound-5.mp3",
  "/dial-sound-6.mp3",
  "/dial-sound-7.mp3",
  "/dial-sound-8.mp3",
];

const Keypad = () => {
  const [dialedNumber, updateDialedNumber] = useState("");
  const onEraseNumber = () =>{
    updateDialedNumber(prevState=>prevState.slice(0,prevState.length-1))
  }
  return (
    <ContactsContext.Consumer>
      {() => {
        // const { contactsList, updateContact } = value;
        
        return (
          <BgContainer>
            <KeypadSectionBg>
              <KeypadContainer>
                <NumberContainer>
                  <NumberInput value={dialedNumber} type="number" />
                  {dialedNumber.length>0 && <EraseButton onClick={onEraseNumber}><RiDeleteBack2Fill/></EraseButton>}
                  
                </NumberContainer>
                <Dialer>
                  {dialerList.map((eachNumber) => {
                    const playSound = () => {
                        const randomIndex = Math.floor(Math.random() * soundList.length);
                      const sound = new Audio(soundList[randomIndex]);
                      sound.play().catch((error) => {
                        console.error("Audio playback failed:", error);
                      });
                    };

                    const onClickButton = (event) => {
                      updateDialedNumber(
                        (prevState) => prevState + event.target.value,
                      );
                      playSound();
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
