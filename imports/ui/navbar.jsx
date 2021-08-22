import React, {Compoment} from 'react';
import { Container,Navbar, Nav } from "react-bootstrap";
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data';


function Logout(e){
    Meteor.logout(function(err){
        if (err){
            console.log(err)
        }
    });
}

export const NavBar = (props) => {
    const loggedin_user = useTracker(() => Meteor.user());
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#">Discussion Board</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {loggedin_user ? (
                            <Nav.Link onClick={Logout} className="text-danger">Logout</Nav.Link>
                        ):("")}
                    </Nav>
                    <Nav>
                        { loggedin_user && loggedin_user.emails ? ("Logged in as: " + props.currentUser.emails[0].address):("") }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}