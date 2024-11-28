import { Link } from "react-router-dom";
import { ContactName, Profile, Item } from "./styledComponents";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import ContactsContext from "../../ContactsContext";

const ContactCard = (props) => {
  const { contactObj, isSelectOptionChecked } = props;

  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { onToggleSelectContact } = value;
        const selectContact = () => {
          if (isSelectOptionChecked) {
            onToggleSelectContact(contactObj.id);
          }
        };
        return (
          <Item
            onClick={selectContact}
            id={`${contactObj.name[0].toUpperCase()}`}
          >
            {isSelectOptionChecked ? (
              <>
                <Profile bgColor={contactObj.profileBgColor}>
                  {contactObj.name[0].toUpperCase()}
                </Profile>
                <ContactName>{contactObj.name}</ContactName>
              </>
            ) : (
              <Link className="link" to={`/contacts/${contactObj.id}`}>
                <Profile bgColor={contactObj.profileBgColor}>
                  {contactObj.name[0].toUpperCase()}
                </Profile>
                <ContactName>{contactObj.name}</ContactName>
              </Link>
            )}

            {isSelectOptionChecked &&
              (contactObj.isChecked ? (
                <MdCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              ))}
          </Item>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default ContactCard;
