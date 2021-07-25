import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default class NewsFeed extends React.Component {
    onClickLikeBtn(){
        
    }
    
    render() {
        return (
            <Table bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Created</th>
                        <td>Author</td>
                        <td>Like</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td><Button onClick={()=>this.onClickLikeBtn()}>Like: 0</Button></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}