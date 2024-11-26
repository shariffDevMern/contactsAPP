import { ContactName, Profile, Item } from "./styledComponents";

const ContactCard = (props) => {
  const { contactObj } = props;
  return (
    <Item id={`${contactObj.name[0].toUpperCase()}`}>
      <Profile bgColor={contactObj.profileBgColor}>
        {contactObj.name[0].toUpperCase()}
      </Profile>
      <ContactName>{contactObj.name}</ContactName>
    </Item>
  );
};

export default ContactCard;
