import React from 'react';
import { NavItem, Glyphicon } from 'react-bootstrap';
import { withRouter } from 'react-router';

class AddStoryNavItem extends React.Component {

    onClickCreateStory() {
        this.props.history.push("/createStory");
    }
    
    render() {
        return (
            <NavItem onClick={()=>{this.onClickCreateStory()}}>
                <Glyphicon glyph="plus" />
            </NavItem>
        );
    }
}

export default withRouter(AddStoryNavItem);