import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class UpdateStory extends React.Component {
    constructor(props){
        super(props);
        const { id } = this.props.match.params;
        console.log(id);
    }
    
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