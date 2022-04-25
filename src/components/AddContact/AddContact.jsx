import React, { useContext, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { contactsContext } from '../../contexts/ContactsContext';

const AddContact = () => {
  const { addContact } = useContext(contactsContext);

  const [person, setPerson] = useState({ name: '', number: '' });

  const handleInp = (e) => {
    let obj = {
      ...person,

      [e.target.name]: e.target.value,
    };
    setPerson(obj);
  };
  console.log(person);

  return (
    <InputGroup className="w-50">
      <FormControl
        value={person.name}
        name="name"
        placeholder="enter name"
        onChange={handleInp}
      />
      <FormControl
        value={person.number}
        name="number"
        placeholder="enter number"
        onChange={handleInp}
      />
      <Button
        onClick={() => {
          addContact(person);
          setPerson({ name: '', number: '' });
        }}
      >
        ADD
      </Button>
    </InputGroup>
  );
};

export default AddContact;
