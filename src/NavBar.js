import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {

    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>Moments</Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer to="/home">
                    <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/newsfeed">
                    <NavItem>News Feed</NavItem>
                </LinkContainer>
                <LinkContainer to="/timeline">
                    <NavItem>Timeline</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}
