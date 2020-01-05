import React from "react";

class Admin extends React.Component {
  addQuestion = e => {
    e.preventDefault();
    this.props.addQuestion(this.inputQuestion.value);
    this.inputQuestion.value = "";
  };
  addAnswer = e => {
    e.preventDefault();
    if (this.inputAnswer.value !== "") {
      this.props.addAnswer(this.inputAnswer.value);
      this.inputAnswer.value = "";
    }
  };
  deleteAnswer = e => {
    this.props.deleteAnswer(e);
  };
  saveThisPoll = () => {
    if (this.props.answers.length > 0 && this.props.questions.length > 0) {
      this.props.saveThisPoll();
    }
  };
  render() {
    return (
      <div style={{ width: "300px", margin: "100px auto" }}>
        <h1>Admin Page</h1>
        <input type='text' ref={inp => (this.inputQuestion = inp)} />
        <button style={{ width: "120px" }} onClick={this.addQuestion}>
          Add Question
        </button>
        <input type='text' ref={inp => (this.inputAnswer = inp)} />
        <button style={{ width: "120px" }} onClick={this.addAnswer}>
          Add Answer
        </button>
        <ul className='list-group'>
          <h2>
            Your Question{" "}
            {this.props.questions.length ? (
              <div className='alert alert-success'>
                {this.props.questions[this.props.questions.length - 1]}
              </div>
            ) : (
              <p></p>
            )}
          </h2>
          {this.props.answers.map((e, i) => (
            <li key={i} className='list-group-item'>
              <b>Variant {i + 1}</b> {e}
              <button onClick={this.deleteAnswer.bind(this, e)}>X</button>
            </li>
          ))}
        </ul>
        <button onClick={this.saveThisPoll}>Save</button>
      </div>
    );
  }
}

export default Admin;
