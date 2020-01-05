import React from "react";

class Profile extends React.Component {
  toVote = m => {
    this.props.toVote(m);
  };

  render() {
    return (
      <div className="jumbotron container" style={{ display: "flex" }}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <img
              src="https://www.jumpstarttech.com/files/2018/08/Network-Profile.png"
              className="card-img-top"
              alt="ProfileImage"
              style={{ width: "200px" }}
            />
            <hr />
            <b> {this.props.name}</b>
            <b> {this.props.surname}</b>
            <br />
            <b>{this.props.age} years</b>
          </div>
        </div>
        <div className="jumbotron container">
          <h1>Voting</h1>
          {this.props.activePolls.find(e => e.isActive)
            ? this.props.activePolls.find(e => e.isActive).title
            : "Voting"}
          <ul className="list-group">
            {this.props.activePolls.find(e => e.isActive)
              ? this.props.activePolls
                  .find(e => e.isActive)
                  .answers.map((l, m) => (
                    <li
                      key={m}
                      className="list-group-item"
                      onClick={this.toVote.bind(this, m)}
                    >
                      {l.answer} <b>{l.count + 1}</b>
                    </li>
                  ))
              : ""}
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
