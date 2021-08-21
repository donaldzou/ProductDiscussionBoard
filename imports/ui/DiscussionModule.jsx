import React from 'react';
import {Container} from "react-bootstrap";
import {PostTextbox} from "./PostTextbox.jsx";
import {PostList} from "./posts_list.jsx";

export function DiscussionModule(props){
    return (
        <Container className="DiscussionModule">
            <PostTextbox currentUser={props.currentUser}/>
            <PostList />
        </Container>
    )
}