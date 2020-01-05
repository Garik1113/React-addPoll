import React from "react";
import Admin from "../components/adminPage";
import { connect } from "react-redux";

import {
  adminPageQuestionAction,
  adminPageQuestionDeleteAction,
  adminPageAnswerAction,
  adminPageAnswerDeleteAction,
  adminPagePollsSaveAction,
  adminPagePollsDeleteAction
} from "../store/actions/adminPageAction";

class AdminPageContainer extends React.Component {
  saveThisPoll = () => {
    let question = this.props.adminPageQuestions[
      this.props.adminPageQuestions.length - 1
    ];
    let answersObject = this.props.adminPageAnswers.slice();
    let answersArray = answersObject.map(e => ({ answer: e, count: 0 }));
    let polls = {};
    polls.title = question;
    polls.answers = answersArray;
    polls.isActive = false;
    this.props.adminPagePollsSaveAction(polls);
    this.props.adminPagePollsDeleteAction();
    this.props.adminPageQuestionDeleteAction();
  };
  render() {
    return (
      <div>
        <Admin
          questions={this.props.adminPageQuestions}
          answers={this.props.adminPageAnswers}
          addQuestion={this.props.adminPageQuestionAction}
          addAnswer={this.props.adminPageAnswerAction}
          deleteAnswer={this.props.adminPageAnswerDeleteAction}
          saveThisPoll={this.saveThisPoll}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminPageQuestions: state.adminPageQuestions,
    adminPageAnswers: state.adminPageAnswers
  };
};

const mapDispatchToProps = {
  adminPageQuestionAction,
  adminPageQuestionDeleteAction,
  adminPageAnswerAction,
  adminPageAnswerDeleteAction,
  adminPagePollsSaveAction,
  adminPagePollsDeleteAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
