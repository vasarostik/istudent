import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import '../css/Login.css';
import { NavbarPage } from "./NavbarPage";
import ListGroup from 'react-bootstrap/ListGroup';

export class Login extends Component {

    render() {

        return (
            <div className="Login">
                {/* main container */}
                <div className="log">

                    <form action="" className="log-form">
                        <h4 className="font-weight-bold mb-3 form-title">Sign in to your account</h4>
                        <div className="md-form">
                            <MDBInput label="E-mail address" outline icon="envelope" />
                            <label>
                                <a href="#!"><span className="textspan">Forgot password?</span></a>
                            </label>
                        </div>
                        
                        
                        
                        <div className="md-form2">
                            <MDBInput label="Password" outline icon="fas fa-key"/>
                        </div>

                            <div className="float-right">
                                <button className="logButton" type="button">Sign in</button>
                            </div>

                    </form>

                </div>
                {/* end of main container */}
            </div>

        );
    }
}
