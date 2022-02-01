import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const deleteContact=(id)=>{
    props.getContactId(id)
  }
  const renderContact = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandle={deleteContact} key={contact.id}/>
    );
  });
  return <div className="ui animated list">{renderContact}</div>;
}

export default ContactList;
