import { ContactName, Profile, Item } from "./styledComponents";

const ContactCard = (props) => {
  const { contactObj, randomColor } = props;
  return (
    <Item id={`${contactObj.name[0].toUpperCase()}`}>
      <Profile bgColor={randomColor}>
        {contactObj.name[0].toUpperCase()}
      </Profile>
      <ContactName>{contactObj.name}</ContactName>
    </Item>
  );
};

export default ContactCard;
