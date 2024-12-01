import React from "react";

const ContactsContext = React.createContext({
  contactsList: [],
  AddContact: () => {},
  onToggleSelectContact: () => {},
  toggleSelectAllContacts: () => {},
  onDeleteContacts: () => {},
  updateContact:() =>{}
});

export default ContactsContext;
