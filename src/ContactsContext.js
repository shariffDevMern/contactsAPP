import React from "react";

const ContactsContext = React.createContext({
  contactsList: [],
  AddContact: () => {},
  onToggleSelectContact: () => {},
  toggleSelectAllContacts: () => {},
  onDeleteContacts: () => {},
});

export default ContactsContext;
