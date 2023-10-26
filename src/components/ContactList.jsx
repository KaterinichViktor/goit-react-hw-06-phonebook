
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
