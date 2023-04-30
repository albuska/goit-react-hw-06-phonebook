import { createSlice } from '@reduxjs/toolkit';


//   const normalizedFilter = filter.toLowerCase();

//   const filterContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
// );

  
export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    //   onChangeFilterContacts(state, action) {
    //       console.log(state)
    //       state = action.payload;
    // },
  },
});

export const { onChangeFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer; 
export let getFilters = state => state.filter;