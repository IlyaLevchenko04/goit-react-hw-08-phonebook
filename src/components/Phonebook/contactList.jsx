import { selectContacts } from 'redux/ContactsSlice/selectors';
import { selectFilter } from 'redux/FilterSlice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactApi } from 'redux/ContactsSlice/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteContactApi(id));
  }

  const getVisibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {getVisibleContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {`${name}: ${number}`}
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
