import React, { Component, Fragment } from 'react';
import { MDBInput } from 'mdbreact';
import '../css/Registration.css';
import { NavbarPage } from "../components/NavbarPage";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

export class Registration extends Component {

    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = () => {

        const { email, password, confirmPassword } = this.state;

        // perform all neccassary validations
        if (password === '') {
            alert("Please, fill in all fields!")
        }
        else if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            axios.post(`http://localhost:5000/reg`, { email, password })
                .then(res => {
                    console.log(res);
                    console.log(res.data);

                    this.props.history.push(this.props.history.location.pathname.concat('/profile'));
                })
        }

    }


    handleEmail(event) {
        this.setState({ email: event.target.value })
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    handleConfirmPasswordChange(event) {
        this.setState({ confirmPassword: event.target.value })
    }

    render() {

        return (
            <div className="Registration">
                <NavbarPage style={{ boxShadow: "none" }} />
                {/* main container */}
                <div className="reg">

                    {/* Rectangle */}
                    <div className="rectangle1">
                        <div className="emptyRectangle1">
                            <h2 className="rightTitle1">Registration Form</h2>
                        </div>
                    </div>

                    {/* Social Buttons */}
                    <ListGroup className="buttonGroup">

                        <a href="http://facebook.com">
                            <button className="socialButton" style={{ backgroundColor: "#3b5998" }}>
                                <i style={{ color: 'white', marginLeft: "0.05vw", marginRight: "1vw" }} className="fab fa-facebook-f pr-1"></i>
                                Continue with Facebook
                            </button>
                        </a>

                        <a href="http://google.com">
                            <button className="socialButton" style={{ backgroundColor: "#4385f3" }}>
                                <i style={{ color: 'white', marginLeft: "-2.05vw", marginRight: "1vw" }} className="fab fa-google"></i>
                                Continue with Google
                            </button>
                        </a>

                        <a href="http://linkedin.com">
                            <button className="socialButton" style={{ backgroundColor: "#2697cf" }}>
                                <i style={{ color: 'white', marginLeft: "-1.1vw", marginRight: "1vw" }} className="fab fa-linkedin"></i>
                                Continue with LinkedIn
                            </button>
                        </a>
                    </ListGroup>

                    {/*Input form */}
                    <form className="reg-form">
                        <h4 className="font-weight-bold mb-3">Create account</h4>
                        <p className="mdb-color-text">To sign up, please fill in these text fields</p>

                        <div className="md-form">
                            <MDBInput label="E-mail address" type="email" outline icon="envelope" onChange={this.handleEmail.bind(this)} required />
                        </div>
                        <div className="md-form">
                            <MDBInput label="Password" type="password" outline icon="fas fa-key" onChange={this.handlePasswordChange.bind(this)} />
                        </div>
                        <div className="md-form">
                            <MDBInput label="Confirm password" type="password" outline icon="fas fa-lock" onChange={this.handleConfirmPasswordChange.bind(this)} />
                        </div>

                        <div className="space">
                            <div className="float-left">
                                <a href="/" ><button className="signup-but cancel" type="button" style={{ color: 'white' }}>Cancel</button></a>
                            </div>
                            <div className="float-right">
                                <button className="signup-but sign-up" type="button" style={{ color: 'white' }} onClick={this.handleSubmit}>Continue</button>
                            </div>
                        </div>

                    </form>

                </div>
                {/* end of main container */}
            </div>

        );
    }
}