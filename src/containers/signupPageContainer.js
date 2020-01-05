import React from "react";
import SignupPage from "../components/signupPage";
import { connect } from "react-redux";
import {
  signupPageNameChange,
  signupPageSurnameChange,
  signupPageEmailChange,
  signupPageAgeChange,
  signupPageLoginChange,
  signupPagePasswordChange,
  signupPageDeleteInform
} from "../store/actions/signupPageAction";

class SignupPageContainer extends React.Component {
  goToProfile = () => {
    this.props.history.push({ pathname: "/profile" });
  };
  render() {
    return (
      <SignupPage
        goToProfile={this.goToProfile}
        name={this.props.name}
        surname={this.props.surname}
        email={this.props.email}
        age={this.props.age}
        login={this.props.login}
        password={this.props.password}
        changeName={this.props.signupPageNameChange}
        changeSurname={this.props.signupPageSurnameChange}
        changeEmail={this.props.signupPageEmailChange}
        changeAge={this.props.signupPageAgeChange}
        changeLogin={this.props.signupPageLoginChange}
        changePassword={this.props.signupPagePasswordChange}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    name: state.signupPage.name,
    surname: state.signupPage.surname,
    email: state.signupPage.email,
    age: state.signupPage.age,
    login: state.signupPage.login,
    password: state.signupPage.password
  };
};
const mapDispatchToProps = {
  signupPageNameChange,
  signupPageSurnameChange,
  signupPageEmailChange,
  signupPageAgeChange,
  signupPageLoginChange,
  signupPagePasswordChange,
  signupPageDeleteInform
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPageContainer);
