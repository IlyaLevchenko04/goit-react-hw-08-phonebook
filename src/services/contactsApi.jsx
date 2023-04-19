import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://642d6cb8bf8cbecdb405d59f.mockapi.io/contacts/contacts'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/addContact',

  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://642d6cb8bf8cbecdb405d59f.mockapi.io/contacts/contacts`,
        contact
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactApi = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://642d6cb8bf8cbecdb405d59f.mockapi.io/contacts/contacts/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
