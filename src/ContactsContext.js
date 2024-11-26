import React from "react";

const ContactsContext = React.createContext({
  contactsList: [],
  AddContact: () => {},
});

export default ContactsContext;
