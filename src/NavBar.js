import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import AddStoryNavItem from './AddStoryNavItem';
import SigninNavItem from './SigninNavItem';

function NavBar(props) {

    const {login, username} = props.userLogin;
    const userAuthentication = login ? <NavItem>{`Welcome ${username}!`}</NavItem> : <SigninNavItem />;

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
                <AddStoryNavItem login={login} />
                {userAuthentication}
            </Nav>
        </Navbar>
    );
}

const mapStateToProps = state => ({
    userLogin: state.userLogin
});

export default connect(mapStateToProps)(NavBar);
