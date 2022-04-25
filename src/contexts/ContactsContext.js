import axios from 'axios';
import React, { createContext, useReducer } from 'react';

export const contactsContext = createContext();

const INIT_STATE = {
  contacts: [],
};

const ContactsContextProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addContact = async (newContact) => {
    await axios.post('http://localhost:8000/contacts', newContact);
  };

  const values = {
    addContact: addContact,
  };

  return (
    <contactsContext.Provider value={values}>
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsContextProvider;
