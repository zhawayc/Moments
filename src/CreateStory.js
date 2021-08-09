import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import graphQLFetch from './graphQLFetch';

class CreateStory extends React.Component {
    static async createStory(story) {
        const query = `mutation CreateStory($story: inputStory!) {
            createStory(story: $story){
            _id
            title
            content
            created
            }
        }`;
        const data = await graphQLFetch(query, {story});
        return data;
    }
    
    constructor(props) {
        super(props);
        this.state = {
            story: {
                title: "",
                content: ""
            }
        };
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        const {story} = this.state;
        const {userId} = this.props.userLogin;
        story.userId = userId;
        console.log(story);
        await CreateStory.createStory(story);
        this.props.history.push("/timeline");
    }

    onCancel(){
        this.props.history.push("/timeline");
    }

    onChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        let newStory = this.state.story;
        newStory[name] = value;
        this.setState({story: newStory});
    }
    
    render() {
        const {title, content} = this.state;
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl name="title" value={title} onChange={(e)=>{this.onChange(e)}} autoFocus />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Content</ControlLabel>
                        <FormControl name="content" value={content} onChange={(e)=>this.onChange(e)}></FormControl>
                    </FormGroup>
                </Form>
                <ButtonToolbar>
                    <Button type="button" bsStyle="primary" onClick={(e)=>{this.handleSubmit(e)}}>Submit</Button>
                    <Button type="link" onClick={()=>this.onCancel()}>Back</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userLogin: state.userLogin
});

export default connect(mapStateToProps)(CreateStory);