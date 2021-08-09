import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import graphQLFetch from './graphQLFetch';

export default class UpdateStory extends React.Component {
    static async fetchStoryById(_id) {
        const query = `query GetStoryById($_id: String!) {
            getStoryById(_id: $_id)  {
                _id
                userId
                title
                content
          }
        }`
        const data = await graphQLFetch(query, {_id});
        return data;
    }

    static async updateStory(story) {
        const query = `mutation UpdateStory($story: inputStory!) {
            updateStory(story: $story){
                _id
                userId
                title
                content
            }
        }`;
        const data = await graphQLFetch(query, {story});
        return data;
    }
    
    constructor(props){
        super(props);
        this.state = {
            story: null
        }
    }
    
    onChange(e) {
        const {name, value} = e.target;
        const newStory = {...this.state.story, [name]:value};
        this.setState({story: newStory})
    }

    async handleSubmit(e) {
        e.preventDefault();
        const {story} = this.state;
        console.log(story);
        await UpdateStory.updateStory({...story});
        this.props.history.push("/timeline");
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const data = await UpdateStory.fetchStoryById(id);
        this.setState({story: data.getStoryById});
    }
    
    render() {
        const {story} = this.state;
        console.log(story);
        if (story == null) {
            return <div>Loading ... </div>;
        }
        const {title, content} = story;
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl name="title" value={title} onChange={(e)=>{this.onChange(e)}} autoFocus />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Content</ControlLabel>
                        <FormControl name="content" value={content} onChange={(e)=>{this.onChange(e)}}></FormControl>
                    </FormGroup>
                </Form>
                <Button type="button" bsStyle="primary" onClick={(e)=>{this.handleSubmit(e)}}>Submit</Button>
            </div>
        );
    }
}