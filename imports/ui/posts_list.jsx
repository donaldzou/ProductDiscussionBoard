import React from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { PostsCollection } from "../api/posts.js";
import {Card, Button} from "react-bootstrap";



export function PostList(){
    let posts = useTracker( () => {
        return PostsCollection.find().fetch().reverse()
    })

    for (var i = 0; i < posts.length; i++){
        let time = new Date(posts[i].time)
        let hour = time.getHours()
        let minute = time.getMinutes()
        let second = time.getSeconds()
        let day = time.getDate()
        let month = time.getMonth() + 1
        let year = time.getFullYear()

        posts[i].time = (hour.toString().length === 1 ? ("0"+hour.toString()):(hour.toString()))+":"+
            (minute.toString().length === 1 ? ("0"+minute.toString()):(minute.toString()))+":"+
            (second.toString().length === 1 ? ("0"+second.toString()):(second.toString()))+" "+
            day+"/"+month+"/"+year
    }

    return(
        <div>
            <div>
                <h1>Discussions</h1>
                <hr/>
            </div>
            <div>
                {
                    posts.map(post =>
                        <Card className="mb-3" key={post._id}>
                            <Card.Header><strong>{
                                post.user_id
                            }</strong> said:</Card.Header>
                            <Card.Body>
                                <Card.Text>{post.content}</Card.Text>
                                <p><small className="text-muted">{post.time}</small></p>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}