import React, { Component, Fragment } from 'react';
import { MDBInput } from 'mdbreact';
import './css/Login.css';
import { NavbarPage } from "./components/NavbarPage";
import ListGroup from 'react-bootstrap/ListGroup';

export class Login extends Component {

    render() {

        return (
            <div className="Login">
                <NavbarPage style={{ boxShadow: "none" }} />
                {/* main container */}
                <div className="main1">

                     {/* Rectangle */}
                    <div className="rectangle1">
                        <div className="emptyRectangle1">
                            <h2 className="rightTitle1">Sign in Student account</h2>
                        </div>
                    </div>

                     {/* Social Buttons */}
                    <ListGroup className="buttonGroup">

                        <a href="http://facebook.com">
                            <button className="socialButton" style={{backgroundColor: "#3b5998"}}>
                                <i style={{ color: 'white', marginLeft: "0.05vw", marginRight: "1vw" }} class="fab fa-facebook-f pr-1"></i>
                                Continue with Facebook
                            </button>
                        </a>

                        <a href="http://google.com">
                            <button  className="socialButton" style={{backgroundColor: "#4385f3"}}>
                                <i style={{ color: 'white', marginLeft: "-2.05vw", marginRight: "1vw" }} class="fab fa-google"></i>
                                Continue with Google
                            </button>
                        </a>

                        <a href="http://linkedin.com">
                            <button  className="socialButton" style={{backgroundColor: "#2697cf"}}>
                                <i style={{ color: 'white', marginLeft: "-1.1vw", marginRight: "1vw" }} class="fab fa-linkedin"></i>
                                Continue with LinkedIn
                            </button>
                        </a>
                    </ListGroup>

                     {/*Input form */}
                    <form action="" className="my-form">
                        <h4 className="font-weight-bold mb-3">Sign in to your account</h4>
                        <p className="mdb-color-text">To log in, please fill in these text fiels with your e-mail address and password.</p>
                        <div className="md-form">
                            <MDBInput label="E-mail address" outline icon="envelope" />
                        </div>
                        <div className="md-form">
                            <MDBInput label="Password" outline icon="fas fa-key" />
                        </div>
                        <div className="space">
                            <div className="float-right">
                                <button className="logButton" type="button" style={{ color: 'white' }}>Sign in</button>
                            </div>
                        </div>
                        <hr />
                        <a className="forgotlink" href="#!"><span className="textspan">Forgot password? Click here.</span></a>
                    </form>

                </div>
                {/* end of main container */}
            </div>

        );
    }
}
