import React, { Component } from "react";
import logo from "../logo.svg";

class Profile extends Component {
  render() {
    let ImageStyle = {
      width: 100,
      height: 100,
    };

    return (
      <div className="container p-2">
        <div className="rounded mx-auto d-block" style={ImageStyle}>
          <img src={logo} alt="DP"></img>
        </div>
        <div className="mt-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Name
              </label>
            </div>
            <span className="m-2">Someone</span>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Companies
              </label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              <option defaultValue>Choose...</option>
              <option value="1">Company1</option>
              <option value="2">Company2</option>
              <option value="3">Company3</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Current Employer
              </label>
            </div>
            <span className="m-2">Someone</span>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Designation
              </label>
            </div>
            <span className="m-2">Someone</span>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Interest
              </label>
            </div>
            <span className="m-2">Someone</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
