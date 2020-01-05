import React from "react";
const formStyle = {
  margin: "100px auto",
  width: "150px",
  textAlign: "center"
};
class LoginPage extends React.Component {
  changeLogin = e => {
    this.props.changeLogin(e.target.value);
  };
  changePassword = e => {
    this.props.changePassword(e.target.value);
  };
  checkInfo = e => {
    e.preventDefault();
    if (
      (this.props.login === this.props.signupLogin &&
        this.props.password === this.props.signupPassword) ||
      (this.props.login === "user" && this.props.password === "user")
    ) {
      return this.props.goToProfile();
    }
    return alert("Wrong Login or Password");
  };
  render() {
    return (
      <div style={formStyle}>
        <h1>Login Page</h1>
        <form>
          <input
            type="text"
            placeholder="Login"
            value={this.props.login}
            onChange={this.changeLogin}
          />
          <input
            type="password"
            placeholder="password"
            value={this.props.password}
            onChange={this.changePassword}
          />
          <button onClick={this.checkInfo}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
