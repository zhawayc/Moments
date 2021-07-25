import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class CreateStory extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl name="title" autoFocus />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Content</ControlLabel>
                        <FormControl name="content"></FormControl>
                    </FormGroup>
                </Form>
                <Button type="button" bsStyle="primary" onClick={(e)=>{this.handleSubmit(e)}}>Submit</Button>
            </div>
        );
    }
}