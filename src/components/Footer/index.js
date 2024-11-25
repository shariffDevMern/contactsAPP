import { FaStar } from "react-icons/fa";
import { IoMdContact, IoIosKeypad } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";
import { FooterBg, IconContainer } from "./styledComponents";

const Footer = () => {
  return (
    <FooterBg>
      <IconContainer>
        <FaStar />
      </IconContainer>
      <IconContainer>
        <IoTimeSharp />
      </IconContainer>
      <IconContainer>
        <IoMdContact />
      </IconContainer>
      <IconContainer>
        <IoIosKeypad />
      </IconContainer>
    </FooterBg>
  );
};

export default Footer;
