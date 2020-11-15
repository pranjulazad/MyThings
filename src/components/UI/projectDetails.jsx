import React, { Component, useState } from "react";
import logo from "../../logo.svg";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

class ProjectDetails extends Component {
  state = {
    detail: this.props.detail,
    languages: [],
    popoverOpen: false,
    popId: this.props.id,
  };

  componentDidMount = async () => {
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let languages = await fetch(this.props.detail.languages_url, config);
    let languagesJson = await languages.json();
    this.setState({
      languages: Object.keys(languagesJson),
    });
  };

  removePop = () => {
    this.setState({ popoverOpen: false });
  };

  toggle = () => {
    let { popoverOpen } = this.state;
    this.setState({ popoverOpen: popoverOpen ? false : true });

    setTimeout(this.removePop, 2000);
  };

  render() {
    let { detail, languages, popoverOpen, popId } = this.state;

    let langStr = "";

    languages.map((language) => {
      langStr += " " + language + " |";
    });
    langStr = langStr.slice(0, langStr.length - 1);
    //console.log(langStr.slice(0, langStr.length - 1));

    return (
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={logo} className="card-img-top" alt="projectImage" />
        <div className="card-body">
          <h5 className="card-title">{detail.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="row">
            <div className="col">
              <Button id={"pop" + popId.toString()} type="button">
                Languages
              </Button>
              <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target={"pop" + popId.toString()}
                toggle={this.toggle}
              >
                <PopoverHeader>Languages Used</PopoverHeader>
                <PopoverBody>
                  <span>{langStr}</span>
                </PopoverBody>
              </Popover>
            </div>
            <div className="col">
              <a
                href={detail.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Git Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
