import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
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
      <Link to="/contacts" className="link">
        <IconContainer>
          <IoMdContact />
        </IconContainer>
      </Link>
      <Link className="link" to="/keypad">
        <IconContainer>
          <IoIosKeypad />
        </IconContainer>
      </Link>
    </FooterBg>
  );
};

export default Footer;
