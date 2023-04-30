import { ContactItem } from '../ContactItem/ContactItem';
import { List, Button, Item } from './ContactList.styled';
// import PropTypes from 'prop-types';
import { deleteContact, getContacts } from '../../redux/contactsSlice'; 
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch(); 
console.log(contacts)
  return (
    <>
      <List>
        {contacts.map(contact => (
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

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
