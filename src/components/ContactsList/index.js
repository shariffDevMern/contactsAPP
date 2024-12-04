import { Link } from "react-router-dom";
import { ContactItem, Letter, List } from "./styledComponents";
import ContactCard from "../ContactCard";

const ContactsList = (props) => {
  const { contactData, isSelectOptionChecked } = props;
  const { contacts } = contactData;
  const isContactsVisible = contacts.length === 0;
  return isContactsVisible ? null : (
    <ContactItem>
      <Letter id={`${contactData.id}`}>{contactData.id}</Letter>
      <hr />
      <List>
        {contacts.map((eachContact) => (
          isSelectOptionChecked?<ContactCard
          key={eachContact.id}
          isSelectOptionChecked={isSelectOptionChecked}
          contactObj={eachContact}
        />:
        <Link className="link" to={`/contacts/${eachContact.id}`}>
        <ContactCard
          key={eachContact.id}
          isSelectOptionChecked={isSelectOptionChecked}
          contactObj={eachContact}
        />
        </Link>
          
          
        ))}
      </List>
    </ContactItem>
  );
};

export default ContactsList;
