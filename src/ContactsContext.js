import React from "react";

const ContactsContext = React.createContext({
  contactsList: [],
  AddContact: () => {},
  onToggleSelectContact: () => {},
});

export default ContactsContext;
