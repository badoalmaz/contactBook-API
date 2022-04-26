import axios from 'axios';
import React, { createContext, useReducer } from 'react';

export const contactsContext = createContext();

const INIT_STATE = {
  contacts: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return { ...state, contacts: action.payload };

    default:
      return state;
  }
};

const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getContacts = async () => {
    let { data } = await axios('http://localhost:8000/contacts');

    let action = {
      type: 'GET_CONTACTS',
      payload: data,
    };

    dispatch(action);
  };

  const addContact = async (newContact) => {
    await axios.post('http://localhost:8000/contacts', newContact);
    getContacts();
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:8000/contacts/${id}`);
    getContacts();
  };

  const changeStatus = async (id) => {
    let { data } = await axios(`http://localhost:8000/contacts/${id}`);
    await axios.patch(`http://localhost:8000/contacts/${id}`, {
      status: !data.status,
    });
    getContacts();
  };

  return (
    <contactsContext.Provider
      value={{
        contacts: state.contacts,
        addContact: addContact,
        getContacts: getContacts,
        deleteContact: deleteContact,
        changeStatus: changeStatus,
      }}
    >
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsContextProvider;
