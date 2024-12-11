import React from "react";

const ContactsContext = React.createContext({
  contactsList: [],
  recentCalls:[],
  AddContact: () => {},
  onToggleSelectContact: () => {},
  toggleSelectAllContacts: () => {},
  onDeleteContacts: () => {},
  updateContact: () => {},
  updateRecentCalls:()=>{}
});

export default ContactsContext;
