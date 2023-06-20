import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContacts, fetchContacts } from '../../redux/operators';
import css from './contactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchContacts())
  }, []);

  function onDelete(id) {
    dispatch(deleteContacts(id)).then(() => {
      dispatch(fetchContacts());
    })
  }
  const filteredContacts = contacts.filter(contact => {
    const contactName = contact.name.toLowerCase();
    const filterText = filter.toLowerCase();

    return contactName.includes(filterText);
  });
  console.log(contacts);
  return (
    <div>
      <h2>Contacts</h2>
    
      {contacts && (
        <ul>
          {contacts.length > 0 &&
            filteredContacts.map(contact => (
              <li className={css.listItem} key={contact.id}>
                {contact.name}: {contact.phone}
                <button onClick={() => onDelete(contact.id)}>Delete</button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

