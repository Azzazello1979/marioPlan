import React, { Component } from "react";

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    //console.log(e.target.id, e.target.value)
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.setState({
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} value={this.state.email} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} value={this.state.password} />
          </div>
          <div className="input-Field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName} />
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
