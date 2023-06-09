import { Input } from './Filter.styled';
import { onChangeFilterContacts } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from '../../redux/filterSlice';

  
const Filter = () => { 
  let filter = useSelector(getFilters);
  const dispatch = useDispatch();
  
  return (
    <>
      <label>
        Find contacts by name
        <Input
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name="filter"
          value={filter}
          onChange={(e) => dispatch(onChangeFilterContacts(e.target.value))}
        />
      </label>
    </>
  );
};

export default Filter;

