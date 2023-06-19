import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, addContact } from 'redux/slice';
import { getItems, getFilter } from 'redux/selectors';
import { nanoid } from 'nanoid';

function ContactForm() {
  const [name, setName] = useState(''); // State variable for storing the name input value
  const [number, setNumber] = useState(''); // State variable for storing the number input value

  const contacts = useSelector(getItems); // Accessing the contacts from Redux store
  const filterValue = useSelector(getFilter); // Accessing the filter value from Redux store
  const dispatch = useDispatch(); // Hook for dispatching Redux actions

  const handleContactInfo = () => {
    if (name.trim() === '' || number.trim() === '') {
      return; // Exit the function if name or number is empty
    }

    const data = { id: nanoid(), name: name, number: number };
    dispatch(addContact(data)); // Dispatching the addContact action with contact data

    if (filterValue !== '') {
      dispatch(changeFilter('')); // Clearing the filter if it is not empty
    }

    resetForm(); // Resetting the form inputs
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      if (filterValue !== '') {
        dispatch(changeFilter('')); // Clearing the filter if it is not empty
      }
      return alert(`${name} is already in contacts`);
    }

    handleContactInfo(); // Handling the contact information submission
  };

  const resetForm = () => {
    setName(''); // Resetting the name input value
    setNumber(''); // Resetting the number input value
  };

  const onChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value); // Updating the name input value
        break;
      case 'number':
        setNumber(value); // Updating the number input value
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <p>Name</p>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="inputContainer">
          <p>Number</p>
          <input
            type="tel"
            name="number"
            required
            value={number}
            onChange={onChange}
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}

export default ContactForm;