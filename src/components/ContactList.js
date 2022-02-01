import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const renderContact = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact}/>
    );
  });
  return <div className="ui celled list">{renderContact}</div>;
}

export default ContactList;
