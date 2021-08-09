import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import graphQLFetch from './graphQLFetch';
import withToast from './withToast';

class NewsFeed extends React.Component {
    static async fetchNewsFeed() {
        const query = `query {getStories(page: 1){
            stories{
              _id
              title
              content
              userId
              username
              created
              like
            }
            page
          }}`;
        const data = await graphQLFetch(query);
        return data;
    }

    static async likeStory(_id, userId) {
        const query = `mutation LikeStory($_id: ID!, $userId: ID!) {
              likeStory(_id: $_id, userId: $userId)
            }`;
        const data = await graphQLFetch(query, {_id, userId});
        return data.likeStory;
    }

    constructor(props) {
        super(props);
        this.state = {stories: []};
    }
    
    async onClickLikeBtn(_id, index){
        const { userId, login } = this.props.userLogin;
        if(!login) {
            this.props.showError("You need to login to like the story.");
        } else {
            const result = await NewsFeed.likeStory(_id, userId);
            if (!result) {
                this.props.showError("You've already liked this story before");
            } else {
                let copyStories = Object.assign(this.state.stories);
                copyStories[index].like++;
                this.setState({stories: copyStories});
            }
        }
    }

    async componentDidMount() {
        const data = await NewsFeed.fetchNewsFeed();
        this.setState({stories: data.getStories.stories});
    }
    
    render() {
        const rows = this.state.stories.map((story, i) => {
            return (
                <tr key={story._id}>
                    <td>{story.title}</td>
                    <td>{story.content}</td>
                    <td>{story.created.toDateString()}</td>
                    <td>{story.username}</td>
                    <td><Button onClick={()=>this.onClickLikeBtn(story._id, i)}>{`Like: ${story.like}`}</Button></td>
                </tr>
            )
        })

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
                    {rows}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => ({
    userLogin: state.userLogin
});

const NewsFeedWithToast = withToast(NewsFeed);
NewsFeedWithToast.fetchNewsFeed = NewsFeed.fetchNewsFeed;
NewsFeedWithToast.likeStory = NewsFeed.likeStory;
export default connect(mapStateToProps)(NewsFeedWithToast);