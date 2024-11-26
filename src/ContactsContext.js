import React from "react";

const ContactsContext = React.createContext({
  contactsList: [],
  updateContact: () => {},
});

export default ContactsContext;
