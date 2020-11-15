import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  menuItems = (currentPath) => {
    let homeClass, projectClass, apiClass, miscellaneousClass, profileClass;
    homeClass = projectClass = apiClass = miscellaneousClass = profileClass =
      "nav-item";

    let activePath = currentPath;
    if ("/" === activePath) {
      homeClass += " active";
    }
    if ("/projects" === activePath) {
      projectClass += " active";
    }
    if ("/apis" === activePath) {
      apiClass += " active";
    }
    if ("/miscellaneous" === activePath) {
      miscellaneousClass += " active";
    }
    if ("/profile" === activePath) {
      profileClass += " active";
    }

    return (
      <ul className="navbar-nav">
        <li className={homeClass} onClick={this.props.updatePath}>
          <Link className="nav-link bg-primary" to="/">
            Home
          </Link>
        </li>
        <li className={projectClass} onClick={this.props.updatePath}>
          <Link className="nav-link bg-primary" to="/projects">
            Projects
          </Link>
        </li>
        <li className={apiClass} onClick={this.props.updatePath}>
          <Link className="nav-link bg-primary" to="/apis">
            APIs
          </Link>
        </li>
        <li className={miscellaneousClass} onClick={this.props.updatePath}>
          <Link className="nav-link bg-primary" to="/miscellaneous">
            Miscellaneous
          </Link>
        </li>
        <li className={profileClass} onClick={this.props.updatePath}>
          <Link className="nav-link bg-primary" to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/myThings">
          My Things
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {this.menuItems(this.props.currentPath)}
        </div>
      </nav>
    );
  }
}

export default Navbar;
