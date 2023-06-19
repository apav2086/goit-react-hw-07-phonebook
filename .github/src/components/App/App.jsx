
import { useSelector } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';


function App() {
const contacts = useSelector(state => state.contact);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm  />
      <Filter />
      {contacts.length > 0 ? (
<ContactList />
      ) : ( <h4>There are no contacts yet</h4> )}
       
    </div>
  );
};
export default App;