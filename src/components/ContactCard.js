import React from "react";
import user from "../user.png"

function ContactCard(props) {
    const{name,email}=props.contact
  return (
    <div className="item">
        <img src={user}alt="user"className="ui avatar image" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon" style={{color:"red",marginTop:"10px"}}>
          
      </i>
    </div>
  );
}

export default ContactCard;
