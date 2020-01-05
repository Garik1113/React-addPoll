import React from "react";

export default class PollsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  activatePoll = i => {
    this.props.activatePoll(i);
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <div style={{ width: "400px", height: "400px" }}>
        <div>
          <ul className="list-group">
            {this.props.savedPolls.map((e, i) => (
              <div
                key={i}
                style={{
                  width: "300px",
                  margin: "100px auto",
                  textAlign: "center"
                }}
              >
                <h3>{e.title}</h3>{" "}
                {e.answers.map((a, c) => (
                  <li key={c} className="list-group-item">
                    {a.answer}
                  </li>
                ))}
                <button
                  className="btn btn-primary"
                  onClick={this.activatePoll.bind(this, i)}
                >
                  <span>
                    {this.props.savedPolls[i].isActive
                      ? "Diactivate Question"
                      : "Activate Question"}
                  </span>
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
