import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, updateFilter, selectVisibleContacts } from '../Redux/contactsSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);
  console.log(visibleContacts);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (filterText) => {
    dispatch(updateFilter(filterText));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 24,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} />
      <ContactList contacts={visibleContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;





