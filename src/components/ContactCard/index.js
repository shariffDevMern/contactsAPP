import { ContactName, Profile, Item} from "./styledComponents";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import ContactsContext from "../../ContactsContext";

const ContactCard = (props) => {
  const { contactObj, isSelectOptionChecked} = props;
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
            bgColor={contactObj.isChecked}
            onClick={selectContact}
            id={`${contactObj.name[0].toUpperCase()}`}
          >
            {isSelectOptionChecked ? (
              <>
                <Profile bgColor={contactObj.profileBgColor}>
                  {contactObj.name[0].toUpperCase()}
                </Profile>
                
                <ContactName bgColor={contactObj.isChecked}>
                  {contactObj.name}
                </ContactName>
              </>
            ) : (
              <>
                <Profile bgColor={contactObj.profileBgColor}>
                  {contactObj.name[0].toUpperCase()}
                </Profile>
                
                <ContactName bgColor={contactObj.isChecked}>
                  {contactObj.name}<br/><span>{contactObj.phone}</span>
                </ContactName>
                </>
                
                

              
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
