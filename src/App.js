import React, { Component } from 'react';
import './css/App.css';
import { MDBInput } from 'mdbreact';
import { NavbarPage } from "./components/NavbarPage";
import { Container, Row, Col } from 'react-bootstrap';
import {Login} from './components/Login';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarPage />

        {/* main container */}
        <div className="main">


          <Container>
            <Row>
              <Col sm={6}>
                <div className="topic">

                  <h2 className="leftTitle">
                    For both IT Company and</h2>

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
                    successful project!</p>
                </div>
              </Col>
              <Col sm={6}>
                <Login/>
              </Col>
            </Row>

          </Container>
          <div className="buttons">
            <a href="registration/company" className="but but-comp">Company</a>
            <a href="registration/student" className="but but-stud">Student</a>
          </div>
        </div>
        {/* end of main container */}
      </div>
    );
  }
}

export default App;
