import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import '../css/NavbarPage.css';

export class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {

    return (
      <MDBNavbar className="nav" dark expand="md" style={{ padding: 0 }}>
        <MDBNavbarBrand>
          <strong className="navName">IstudenT</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler className="navButton" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink className="link" to="#!"> <span>How to start?</span></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="link" to="#!"><span>About us</span></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="link" to="#!"><span>IT Company</span></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="link" to="#!"><span>Student</span></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="link" to="#!"><span>Login</span></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="link" to="#!"><span>Create account</span></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
