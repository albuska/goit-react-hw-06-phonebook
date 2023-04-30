import { ContactItem } from '../ContactItem/ContactItem';
import { List, Button, Item } from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice'; 
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';


const ContactList = () => {
  const filter = useSelector(getFilters);
     let contacts = useSelector(getContacts);

  const dispatch = useDispatch(); 

    const filterContacts = contacts.filter(contact =>
 contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <List>
        {filterContacts.map(contact => (
          <Item key={contact.id}>
            <ContactItem contact={contact} />
            <Button onClick={() => dispatch(deleteContact(contact.id))}>Delete</Button>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactList;

