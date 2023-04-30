// import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { onChangeFilterContacts } from '../../redux/filterSlice';
import { getFilters } from '../../redux/filterSlice';

// const Filter = ({ filter, onChange }) => {
  
const Filter = () => {
  // const normalizedFilter = filter.toLowerCase();
  //   const dispatch = useDispatch();
  // console.log(dispatch(onChangeFilterContacts()));
 let filter = useSelector(getFilters);
  console.log(filter);

    const handleFilterInput = event => {
    filter = event.currentTarget.value;
  };

  return (
    <>
      <label>
        Find contacts by name
        <Input
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name="filter"
          value={filter}
          // onChange={() => dispatch(onChangeFilterContacts(e => e.currentTarget.value))}
      onChange={handleFilterInput}
        />
      </label>
    </>
  );
};

export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
