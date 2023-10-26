import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const selectContacts = (state) => state.contacts.contacts;
const selectFilter = (state) => state.contacts.filter;

const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export { selectVisibleContacts };

export const { addContact, deleteContact, updateFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
