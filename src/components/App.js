import React,{useState} from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';

function App() {
  const [contacts, setContacts] = useState([]);
  const addHandle=(contact)=>{
    console.log(contact)
    setContacts([...contacts,contact])
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addHandle={addHandle}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
