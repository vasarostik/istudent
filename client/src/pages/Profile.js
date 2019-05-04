import React, { Component } from 'react';
import '../css/Profile.css';
import { AuthNavbar } from "../components/AuthNavbar";


export class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
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
            <div className="Profile">
                <AuthNavbar style={{ boxShadow: "none" }} />
                {/* main container */}
                <div className="profile">

                    {/* Rectangle */}
                    <div className="rectangle1">
                        <div className="emptyRectangle1">
                            <h2 className="rightTitle1"> Your Profile</h2>
                        </div>
                    </div>

                </div>
                {/* end of main container */}
            </div>

        );
    }
}