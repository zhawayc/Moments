import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NewsFeed from './NewsFeed';
import Timeline from './Timeline';
import CreateStory from './CreateStory';
import UpdateStory from './UpdateStory';
import DeleteStory from './DeleteStory';

export default function Content() {
    return (
        <div>
            <Redirect exact from="/" to="/newsfeed" />
            <Route path="/newsfeed" component={NewsFeed} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/createStory" component={CreateStory} />
            <Route path="/updateStory/:id" component={UpdateStory} />
            <Route path="/deleteStory/:id" component={DeleteStory}/>
        </div>
    );
};