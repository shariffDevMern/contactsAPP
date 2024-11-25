import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import {
  HomeBg,
  HeaderSection,
  ContactHeading,
  PhoneIconContainer,
  GetStartedBtn,
  Slogan,
} from "./styledComponents";

const Home = () => {
  return (
    <HomeBg>
      <HeaderSection>
        <PhoneIconContainer>
          <FaPhoneAlt />
        </PhoneIconContainer>
        <ContactHeading>Contacts</ContactHeading>
      </HeaderSection>
      <Slogan>Stay Connected, Seamlessly Organized.</Slogan>
      <Link to="/contacts">
        <GetStartedBtn>Get Started</GetStartedBtn>
      </Link>
    </HomeBg>
  );
};

export default Home;
