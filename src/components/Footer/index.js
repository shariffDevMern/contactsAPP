import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdContact, IoIosKeypad } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";
import { FooterBg, IconContainer } from "./styledComponents";

const navItem = [
  { id: "FAV", path: "/favorite-contacts", icon: FaStar },
  { id: "REC", path: "/recents", icon: IoTimeSharp },
  { id: "CON", path: "/contacts", icon: IoMdContact },
  { id: "KEY", path: "/keypad", icon: IoIosKeypad },
];

const Footer = () => {
  const location = useLocation().pathname;
  const [activeNav, updateActiveNav] = useState(() => {
    if (location === "/favorite-contacts") {
      return "FAV";
    } else if (location === "/recents") {
      return "REC";
    } else if (location === "/contacts") {
      return "CON";
    } else if (location === "/keypad") {
      return "KEY";
    }
  });

  return (
    <FooterBg>
      {navItem.map((eachNavItem) => {
        const onUpdateActiveNav = (id) => {
          updateActiveNav(id);
        };
        return (
          <IconContainer
            isActive={activeNav === eachNavItem.id}
            key={eachNavItem.id}
            onClick={onUpdateActiveNav}
          >
            <Link to={eachNavItem.path} className="link">
              <eachNavItem.icon />
            </Link>
          </IconContainer>
        );
      })}
    </FooterBg>
  );
};

export default Footer;
