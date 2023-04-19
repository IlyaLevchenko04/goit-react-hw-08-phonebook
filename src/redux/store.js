const { configureStore } = require('@reduxjs/toolkit');
const { contactsReducer } = require('./ContactsSlice');
const { filterReducer } = require('./FilterSlice');

const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});

export default store;
