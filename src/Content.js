import React from 'react';
import { Route, HashRouter as Router, Redirect } from 'react-router-dom';

export default function Content() {
    return (
        <div>
            <Redirect exact from="/" to="/stories" />
            <Route path="/createStory" />
            <Route path="/editStory/:id" />
            <Route path="/deleteStory/:id" />
        </div>
    );
};