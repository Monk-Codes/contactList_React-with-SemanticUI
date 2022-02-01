import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Fill the details");
      return;
    }
    this.props.addHandle(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h3>Add Contact</h3>
        <form className="ui form" onSubmit={this.add}>
          <div className="ui field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              minLength={3}
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              required
            />
          </div>
          <div className="ui field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <button className="ui button blue">Click Me !</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
