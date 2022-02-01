import React from "react";
import user from "../user.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="ui item"style={{margin:"3px",padding:"3px"}}>
      <img src={user} alt="user" className="ui avatar image" />
      <div className=" ui content">
        <div className="ui large header">{name}</div>
        <div className="ui small header">{email}</div><br />
        <i
          className="trash alternate outline icon"
          onClick={() => props.clickHandle(id)}
          style={{ color: "red",cursor:"pointer"}}
          />
          </div>
    </div>
  );
}

export default ContactCard;
