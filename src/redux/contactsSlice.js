import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     return state.filter(contact => contact.name === action.payload).length
    //       ? alert(`${action.payload.name} is already in contacts`)
    //       : state(...state, action.payload);
    //   },
    //   prepare(state) {
    //     return {
    //       payload: {
    //         ...state,
    //         id: nanoid(),
    //       },
    //     };
    //   },
    // },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

// Selectors
export const getContacts = state => console.log(state.contacts);
