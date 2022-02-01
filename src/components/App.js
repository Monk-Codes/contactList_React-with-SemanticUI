import React,{useState,useEffect} from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
import {v4 as uuidv4} from "uuid";

function App() {
  const KEY="contacts";
  const [contacts, setContacts] = useState([]);

  const addHandle=(contact)=>
    {
    setContacts([...contacts,{id:uuidv4(),...contact}])
    }
  const removeContact=(id)=>{
    const newList=contacts.filter((contact)=>{
      return contact.id!==id;
    })
    setContacts(newList)
  }
  useEffect(()=>{
    const getContact=JSON.parse(localStorage.getItem(KEY))
    if(getContact) setContacts(getContact)
  },[])

  useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(contacts))
  },[contacts])

  return (
    <div className='ui container' style={{margin:"3px"}}>
      <Header/>
      <AddContact addHandle={addHandle}/>
      <ContactList contacts={contacts} getContactId={removeContact}/>
    </div>
  );
}

export default App;
