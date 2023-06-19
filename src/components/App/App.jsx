
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';


function App() {


  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm  />
      <Filter />
     
<ContactList />
      
    </div>
  );
};
export default App;