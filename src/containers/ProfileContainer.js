import React from "react";
import Profile from "../components/profile";
import { connect } from "react-redux";
import { profilePageClickOnVariant } from "../store/actions/profilePageAction";
class ProfileContainer extends React.Component {
  render() {
    return (
      <div>
        <Profile
          name={this.props.name}
          surname={this.props.surname}
          age={this.props.age}
          activePolls={this.props.activePolls}
          toVote={this.props.profilePageClickOnVariant}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    name: state.signupPage.name,
    surname: state.signupPage.surname,
    age: state.signupPage.age,
    activePolls: state.adminPageSavedPolls
  };
};
const mapDispatchToProps = {
  profilePageClickOnVariant
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
