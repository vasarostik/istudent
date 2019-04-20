import React, { Component } from 'react';
import './css/App.css';
import { Header } from "./components/Header";

class App extends Component {
  
  render() {

    const companyButton = {
      height:'8vmin',
      width:'22vmin',
      border: '0px',
      fontSize:'3.5vmin',
      color: '#fff',
      boxShadow: 'rgba(0, 0, 0, 0.2) -0.5vmin 0.7vmin 0.6vmin 0px',
      backgroundColor: '#404040'
    };

    const studentButton = {
      height:'8vmin',
      width:'22vmin',
      border: '0px',
      fontSize:'3.5vmin',
      color: '#fff',
      boxShadow: 'rgba(0, 0, 0, 0.2) -0.5vmin 0.7vmin 0.6vmin 0px',
      backgroundColor: '#78cc1f'
    };

    return (
      <div className="App">

        {/* main container */}
        <div className="main">
          <Header />
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
            <button style={companyButton}>Company</button>
            <button style={studentButton}>Student</button>
          </div>
        </div>
        {/* end of main container */}
      </div>
    );
  }
}

export default App;
