import React, { useContext, useEffect, useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { contactsContext } from '../../contexts/ContactsContext';

const EditContact = () => {
  const { contactToEdit, saveContact } = useContext(contactsContext);

  const [editContact, setEditContact] = useState(contactToEdit);

  const navigate = useNavigate();

  useEffect(() => {
    setEditContact(contactToEdit);
  }, [editContact]);

  const handleInp = (e) => {
    let obj = {
      ...editContact,
      [e.target.name]: e.target.value,
    };
    setEditContact(obj);
  };

  const goBack = () => navigate(1);
  return (
    <>
      <Button onClick={goBack}>Back</Button>

      {editContact ? (
        <InputGroup className="w-50">
          <FormControl
            value={editContact.name}
            name="name"
            placeholder="enter name"
            onChange={handleInp}
          />
          <FormControl
            value={editContact.number}
            name="number"
            placeholder="enter number"
            onChange={handleInp}
          />

          <Button
            onClick={() => {
              saveContact(editContact);
              navigate('/');
            }}
          >
            SAVE
          </Button>
        </InputGroup>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default EditContact;
