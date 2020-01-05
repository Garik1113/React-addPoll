import React from "react";
import { Link } from "react-router-dom";

class NavLink extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav nav-tabs">
            <Link to="/login">
              <li className="nav-item nav-link ">Login Page</li>
            </Link>
            <Link to="/">
              <li className="nav-item nav-link ">Sign Up</li>
            </Link>
            <Link to="/admin">
              <li className="nav-item nav-link ">Admin Page</li>
            </Link>
            <Link to="/polls">
              <li className="nav-item nav-link ">Polls Page</li>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavLink;
