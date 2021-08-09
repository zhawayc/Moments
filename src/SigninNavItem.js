import React from 'react';
import { connect } from 'react-redux';
import { authSuccess } from './actions';
import { NavItem, Modal, FormGroup, Form, ControlLabel, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import ajax from './ajax';
import withToast from './withToast';

class SigninNavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            hasAccount: true,
        };
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        this.hideModal();
        const form = document.forms.signin;
        const user = {
            username: form.username.value,
            password: form.password.value
        };
        let result;
        if (this.state.hasAccount) {
            result = await ajax("/signin", user);
        } else {
            result = await ajax("/signup", user);
        }

        if(result.status === 200) {
            this.props.authSuccess(result.body, user.username);
            this.props.showSuccess("Authenticated successfully");
        } else {
            this.props.showError(result.body);
        }
    }

    toggleStatus() {
        this.setState({
            hasAccount: !this.state.hasAccount
        });
    }

    showModal() {
        this.setState({showing: true});
    }

    hideModal() {
        this.setState({showing: false});
    }
    
    render() {
        const {showing, hasAccount} = this.state;
        const title = hasAccount ? "Sign In" : "Sign Up";
        const msg = hasAccount ? "Don't have an account yet, sign up here!" : "Already have an ccount. sign in here!";
        return (
            <>
                <NavItem onClick={()=>{this.showModal()}}>{title}</NavItem>
                <Modal keyboard show={showing} onHide={()=>{this.hideModal()}}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form name="signin">
                            <FormGroup>
                                <ControlLabel>Username</ControlLabel>
                                <FormControl name="username" autoFocus />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl name="password"></FormControl>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar>
                            <Button type="button" bsStyle="primary" onClick={(e)=>{this.handleSubmit(e)}}>{title}</Button>
                            <Button bsStyle="link" onClick={(e)=>{this.toggleStatus(e)}}>{msg}</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => ({
    userLogin: state.userLogin
});

const mapDispatchToProps = dispatch => ({
    authSuccess: (userId, username) => dispatch(authSuccess(userId, username))
    })

const SigninNavItemwithToast = withToast(SigninNavItem);

export default connect(mapStateToProps, mapDispatchToProps)(SigninNavItemwithToast);