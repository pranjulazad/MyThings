import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import Navbar from "./components/navbar";
import Main from "./components/main";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    currentPath: window.location.pathname,
  };

  updatePath = () => {
    this.setState({ currentPath: window.location.pathname });
  };

  render() {
    return (
      <div className="bg-dark">
        <React.Fragment>
          <BrowserRouter>
            <Navbar
              currentPath={this.state.currentPath}
              updatePath={this.updatePath}
            ></Navbar>
            <Main></Main>
          </BrowserRouter>
        </React.Fragment>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
