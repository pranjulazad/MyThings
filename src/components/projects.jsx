import React, { Component } from "react";
import ProjectDetails from "./UI/projectDetails";
import { Spinner } from "reactstrap";

class Projects extends Component {
  state = {
    projects: [],
    isSpinner: true,
    isError: false,
  };

  componentDidMount = async () => {
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let repos = await fetch(
      "https://api.github.com/users/pranjulazad/repos",
      config
    ).catch();
    let projectsJson = await repos.json();
    this.setState({ projects: projectsJson, isSpinner: false });
  };

  sleep = async (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  };

  spinnerRequired = (isSpinnerRequired, isError, projects) => {
    if (isSpinnerRequired) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
          <b>{" Getting Information..... "}</b>
        </div>
      );
    } else if (isError) {
      return (
        <div class="d-flex justify-content-center mt-5">
          <b>{" Unable to Retreive Information "}</b>
        </div>
      );
    }

    if (projects.length == 0) {
      return (
        <div class="d-flex justify-content-center mt-5">
          <b>{" Have not started any projects yet "}</b>
        </div>
      );
    }

    return (
      <div className="container p-2">
        <div className="row row-cols-3">
          {projects.map((proj) => {
            return (
              <div className="col mt-2" key={proj.id}>
                <ProjectDetails id={proj.id} detail={proj}></ProjectDetails>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  render() {
    let { projects, isSpinner, isError } = this.state;
    let spinner = this.spinnerRequired(isSpinner, isError, projects);

    return <div className="container">{spinner}</div>;
  }
}

export default Projects;
