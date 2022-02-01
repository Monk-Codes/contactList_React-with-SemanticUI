import React from "react";
import user from "../user.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="ui item">
      <img src={user} alt="user" className="ui avatar image" />
      <div className=" ui content two column grid">
        <div className="ui large header">{name}</div>
        <div className="ui small header">{email}</div>
        <i
          className="trash alternate outline icon row"
          onClick={() => props.clickHandle(id)}
          style={{ color: "red"}}
          />
          </div>
    </div>
  );
}

export default ContactCard;
