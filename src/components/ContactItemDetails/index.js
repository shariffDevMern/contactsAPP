import { useParams } from "react-router-dom";
import ContactsContext from "../../ContactsContext";

const ContactItemDetails = () => {
  const contactId = useParams();
  console.log(contactId.id);

  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList } = value;

        const allContactsArray = [];

        contactsList.forEach((eachContact) =>
          allContactsArray.push(...eachContact.contacts),
        );
        const filteredContactsArray = allContactsArray.filter(
          (eachContact) => eachContact.id === contactId.id,
        );
        console.log(filteredContactsArray);
        return <div>contact</div>;
      }}
    </ContactsContext.Consumer>
  );
};

export default ContactItemDetails;
