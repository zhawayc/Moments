import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AddStoryNavItem from './AddStoryNavItem';
import SigninNavItem from './SigninNavItem';

export default function NavBar() {

    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>Moments</Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer to="/newsfeed">
                    <NavItem>News Feed</NavItem>
                </LinkContainer>
                <LinkContainer to="/timeline">
                    <NavItem>Timeline</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <AddStoryNavItem />
                <SigninNavItem />
            </Nav>
        </Navbar>
    );
}
