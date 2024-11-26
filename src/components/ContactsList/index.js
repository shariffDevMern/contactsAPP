import { Link } from "react-router-dom";

import { ContactItem, Letter, List } from "./styledComponents";
import ContactCard from "../ContactCard";

const ContactsList = (props) => {
  const { contactData } = props;
  const { contacts } = contactData;

  return (
    <ContactItem>
      <Letter id={`${contactData.id}`}>{contactData.id}</Letter>
      <hr />
      <List>
        {contacts.map((eachContact) => (
          <Link
            key={eachContact.id}
            className="link"
            to={`/contacts/${eachContact.id}`}
          >
            <ContactCard contactObj={eachContact} />
          </Link>
        ))}
      </List>
    </ContactItem>
  );
};

export default ContactsList;
