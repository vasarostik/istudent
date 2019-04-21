import React, { Component } from 'react';
import './css/App.css';
import { NavbarPage } from "./components/NavbarPage";

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarPage />

        {/* main container */}
        <div className="main">

          <div className="topic">

            <h2 className="leftTitle">
              For both IT Company and
            </h2>

            <div className="shape">
              <div className="rectangle">
                <div className="emptyRectangle">
                  <h2 className="rightTitle"> Students</h2>
                </div>
              </div>
            </div>

            <p className="pTitle">
              Find a job of your dream<br />
              in any Ukrainian's IT Company<br />
              or find intelligent students on your<br />
              successful project!
            </p>
          </div>
          <div className="buttons">
            <button className="companyButton">Company</button>
            <button className="studentButton">Student</button>
          </div>
        </div>
        {/* end of main container */}
      </div>
    );
  }
}

export default App;
