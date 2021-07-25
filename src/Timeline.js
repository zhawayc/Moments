import React from 'react';
import { Button, Table } from 'react-bootstrap';

export default class Timeline extends React.Component {
    onClickUpdateBtn() {
        this.props.history.push("/updateStory/1");
    }

    onClickDeleteBtn() {
        this.props.history.push("/deleteStory/1");
    }
    
    render() {
        return (
            <Table bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Created</th>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td><Button onClick={()=>{this.onClickUpdateBtn()}}>Update</Button></td>
                        <td><Button onClick={()=>this.onClickDeleteBtn()}>Delete</Button></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}