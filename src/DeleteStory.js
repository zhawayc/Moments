import { Button, ButtonToolbar } from 'react-bootstrap';
import React from 'react';
import graphQLFetch from './graphQLFetch';

export default class DeleteStory extends React.Component {
    
    static async deleteStory(_id) {
        const query = `mutation DeleteStory($_id: String!){
            deleteStory(_id: $_id)
        }`;
        const data = await graphQLFetch(query, {_id});
        return data;
    }

    async onClickBtn(id){
        await DeleteStory.deleteStory(id);
        this.props.history.push("/timeline");
    }

    async onCancel(){
        this.props.history.push("/timeline");
    }
    
    render() {
        const {id} = this.props.match.params;
        console.log(id);
        return (
            <div>
                <div>{`Are you sure to delete story #${id}?`}</div>
                <ButtonToolbar>
                    <Button type="button" bsStyle="primary" onClick={()=>{this.onClickBtn(id)}}>Yes</Button>
                    <Button type="link" onClick={()=>{this.onCancel()}}>Back</Button>
                </ButtonToolbar>  
            </div>
        );
    }
}