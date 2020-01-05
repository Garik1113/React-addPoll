import React from "react";
import { IsValidEmail, IsValidAge, isAllInputsFilled } from "../helpers";
const formStyle = {
  margin: "100px auto",
  width: "150px",
  textAlign: "center"
};

class SignupPage extends React.Component {
  changeName = e => {
    this.props.changeName(e.target.value);
  };
  changeSurname = e => {
    this.props.changeSurname(e.target.value);
  };
  changeEmail = e => {
    this.props.changeEmail(e.target.value);
  };
  changeAge = e => {
    this.props.changeAge(e.target.value);
  };
  changeLogin = e => {
    this.props.changeLogin(e.target.value);
  };
  changePassword = e => {
    this.props.changePassword(e.target.value);
  };
  goToProfile = e => {
    e.preventDefault();
    if (
      IsValidEmail(this.props.email) &&
      IsValidAge(this.props.age) &&
      isAllInputsFilled(
        this.props.name,
        this.props.surname,
        this.props.email,
        this.props.age,
        this.props.login,
        this.props.password
      )
    ) {
      return this.props.goToProfile();
    }
    return alert("Fill inputs correctly");
  };
  render() {
    return (
      <div style={formStyle}>
        <h1>Signup Page</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.props.name}
            onChange={this.changeName}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={this.props.surname}
            onChange={this.changeSurname}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.props.email}
            onChange={this.changeEmail}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.props.age}
            onChange={this.changeAge}
          />
          <input
            type="text"
            name="login"
            placeholder="Login"
            value={this.props.login}
            onChange={this.changeLogin}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.props.password}
            onChange={this.changePassword}
          />
          <button onClick={this.goToProfile}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignupPage;
