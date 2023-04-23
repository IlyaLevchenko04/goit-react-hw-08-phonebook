import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postContact,
  deleteContactApi,
} from 'redux/ContactsSlice/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    //Fetch
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    //Post
    [postContact.pending]: handlePending,
    [postContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [postContact.rejected]: handleRejected,
    // DELETE
    [deleteContactApi.pending]: handlePending,
    [deleteContactApi.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContactApi.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
