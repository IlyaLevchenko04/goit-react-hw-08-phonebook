import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/ContactsSlice/selectors';
import { ContactForm } from './form';
import { ContactList } from './contactList';
import { Filter } from './Filter';

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div>
        <h2>Contacts</h2>
        {isLoading && !error && <p>Request in progress...</p>}
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </div>
    </>
  );
};
