import React from "react";

const ContactsContext = React.createContext({
  contactsList: [],
  AddContact: () => {},
  onToggleSelectContact: () => {},
  toggleSelectAllContacts: () => {},
});

export default ContactsContext;
