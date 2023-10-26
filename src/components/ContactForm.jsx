import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../Redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddContact = () => {
    if (name === '' || number === '') {
      alert('Please fill in all fields');
      return;
    }
  
    const newContact = {
      name,
      number,
      id: Date.now(),
    };
  
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
  
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };
  
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={number}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddContact}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
