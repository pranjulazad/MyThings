import React, { Component, Fragment } from "react";
import Profile from "./profile";
import Home from "./home";
import Projects from "./projects";
import Apis from "./apis";
import Miscellaneous from "./Miscellaneous";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter, Route } from "react-router-dom";

class Main extends Component {
  state = {};

  useStyles = () => {
    return makeStyles((theme) => ({
      root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
      },
    }));
  };

  render() {
    const classes = this.useStyles();

    return (
      <div className={classes.root + " container p-5 "}>
        <Paper elevation={3}>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/apis" component={Apis} />
            <Route exact path="/miscellaneous" component={Miscellaneous} />
          </Fragment>
        </Paper>
      </div>
    );
  }
}

export default Main;
