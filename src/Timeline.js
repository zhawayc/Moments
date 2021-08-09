import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import graphQLFetch from './graphQLFetch';

class Timeline extends React.Component {
    static async fetchTimelineForUserId(userId) {
        const query = `query GetStoriesByUserId($userId: String!) {
            getStoriesByUserId(userId: $userId, page: 1) {
              stories{
                _id
                title
                content
                userId
                created
              }
              page
            }
          }`
        const data = await graphQLFetch(query, {userId});
        return data;
    }

    constructor(props) {
        super(props);
        this.state = {
            stories: []
        };
    }
    
    onClickUpdateBtn(id) {
        this.props.history.push(`/updateStory/${id}`);
    }

    onClickDeleteBtn(id) {
        this.props.history.push(`/deleteStory/${id}`);
    }

    async componentDidUpdate(prevProps) {
        const { login, userId } = this.props.userLogin;
        if (login !== prevProps.userLogin.login && login) {
            const data = await Timeline.fetchTimelineForUserId(userId);
            this.setState({stories: data.getStoriesByUserId.stories});
        }
    }

    async componentDidMount() {
        const { login, userId } = this.props.userLogin;
        if(login) {
            const data = await Timeline.fetchTimelineForUserId(userId);
            this.setState({stories: data.getStoriesByUserId.stories});
        }
    }
    
    render() {
        const {login} = this.props.userLogin;
        const rows = this.state.stories.map(story => (
            <tr key={story._id}>
                <td>{story.title}</td>
                <td>{story.content}</td>
                <td>{story.created.toDateString()}</td>
                <td><Button onClick={()=>{this.onClickUpdateBtn(story._id)}}>Update</Button></td>
                <td><Button onClick={()=>this.onClickDeleteBtn(story._id)}>Delete</Button></td>
            </tr>
        ));
        const timeline = !login ? <div>You'll need to login to see your timeline</div> : 
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
                    {rows}
                </tbody>
            </Table>;
        return (
            <div>
                {timeline}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userLogin: state.userLogin
});

export default connect(mapStateToProps)(Timeline);