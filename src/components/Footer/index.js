import { FaStar } from "react-icons/fa";
import {Link} from 'react-router-dom'
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
      <Link className="link">
      <IconContainer>
        <IoMdContact />
      </IconContainer>
      </Link>
      <IconContainer>
        <IoIosKeypad />
      </IconContainer>
    </FooterBg>
  );
};

export default Footer;
