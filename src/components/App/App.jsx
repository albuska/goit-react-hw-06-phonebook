import { Container, Title } from './App.styled';
import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { getFilters } from '../../redux/filterSlice';


const App = () => {
  const contacts = useSelector(getContacts);
  let filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };

    contacts.filter(contact => contact.name === data.name).length
      ? alert(`${newContact.name} is already in contacts`)
      : contacts(prevState => [newContact, ...prevState]);
  };

  const handleFilterInput = event => {
    filter = event.currentTarget.value;
  };

  // const normalizedFilter = filter.toLowerCase();

  // const filterContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={ handleFilterInput} />
        <ContactList/>
      </div>
    </Container>
  );
};

export default App;
