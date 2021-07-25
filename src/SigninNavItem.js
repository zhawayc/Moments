import React from 'react';
import { NavItem, Modal, FormGroup, Form, ControlLabel, FormControl, ButtonToolbar, Button } from 'react-bootstrap';

export default class SigninNavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false
        };
    }
    
    async handleSubmit(e) {
        e.preventDefault();
    }

    showModal() {
        this.setState({showing: true});
    }

    hideModal() {
        this.setState({showing: false});
    }
    
    render() {
        const {showing} = this.state;
        return (
            <>
                <NavItem onClick={()=>{this.showModal()}}>Sign In</NavItem>
                <Modal keyboard show={showing} onHide={()=>{this.hideModal()}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
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
                            <Button type="button" bsStyle="primary" onClick={(e)=>{this.handleSubmit(e)}}>Sign In</Button>
                            <Button bsStyle="link" onClick={()=>{this.hideModal()}}>Cancel</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}