import React from "react";
import PollsPage from "../components/pollsPage";
import { connect } from "react-redux";
import { pollsPageActivatePoll } from "../store/actions/pollsPageAction";

class PollsPageContainer extends React.Component {
  render() {
    return (
      <div>
        <PollsPage
          savedPolls={this.props.pollsPageSavedPolls}
          activatePoll={this.props.pollsPageActivatePoll}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    pollsPageSavedPolls: state.adminPageSavedPolls
  };
};
const mapDispatchToProps = {
  pollsPageActivatePoll
};

export default connect(mapStateToProps, mapDispatchToProps)(PollsPageContainer);
