import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { contactsContext } from '../../contexts/ContactsContext';
import { FiBookmark } from 'react-icons/fi';
const ContactList = () => {
  const { contacts, getContacts, deleteContact, changeStatus } =
    useContext(contactsContext);

  useEffect(() => {
    getContacts();
  }, []);

  console.log(contacts);
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {contacts.map((item) => (
        <Card style={{ width: '18rem' }} className="m-3">
          <Card.Body>
            <Card.Title>
              Name {item.name}{' '}
              <FiBookmark
                onClick={() => changeStatus(item.id)}
                style={
                  item.status
                    ? { color: 'gold', fill: 'gold', fontSize: '30px' }
                    : { color: 'gold', fontSize: '30px' }
                }
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              number: {item.number}
            </Card.Subtitle>
            <Button variant="danger" onClick={() => deleteContact(item.id)}>
              Delete
            </Button>
            <Button variant="warning">Edit</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
