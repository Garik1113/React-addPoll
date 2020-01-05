import React from "react";
import LoginPage from "../components/loginPage";
import { connect } from "react-redux";
import {
  loginPageLoginChange,
  loginPagePasswordChange,
  loginPageDeletePassword,
  loginPageDeleteLogin
} from "../store/actions/loginPageAction";

class LoginPageContainer extends React.Component {
  goToProfile = () => {
    this.props.history.push({ pathname: "/profile" });
    this.props.loginPageDeleteLogin("");
    this.props.loginPageDeletePassword("");
  };
  render() {
    return (
      <LoginPage
        login={this.props.login}
        password={this.props.password}
        signupLogin={this.props.signupLogin}
        signupPassword={this.props.signupPassword}
        changeLogin={this.props.loginPageLoginChange}
        changePassword={this.props.loginPagePasswordChange}
        goToProfile={this.goToProfile}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.loginPage.login,
    password: state.loginPage.password,
    signupLogin: state.signupPage.login,
    signupPassword: state.signupPage.password
  };
};
const mapDispatchToProps = {
  loginPageLoginChange,
  loginPagePasswordChange,
  loginPageDeleteLogin,
  loginPageDeletePassword
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
