import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';
import { getItems, getFilter } from 'redux/selectors';
import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  }; 
  return (
    <div>
          <h2>Contacts</h2>
    
      {contacts && (
        <ul>
          {contacts.filter(({ name }) => name.toLowerCase().includes(filterValue)).map(({ id, name, number }) => (
            <li className={css.listItem} key={id}>
              <p>
                {name} : {number}
              </p>
              <button type="button" onClick={() => handleDeleteContact(id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;