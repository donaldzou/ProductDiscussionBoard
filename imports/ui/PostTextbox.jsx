import React,{useState} from "react";
import {FloatingLabel,Form, Button} from "react-bootstrap";
import {AddPost} from "../api/posts.js";
import { useTracker } from 'meteor/react-meteor-data';

export function PostTextbox(props){
    const [post, definePost] = useState("")
    const loggedin_user = useTracker(() => Meteor.user());
    function validate(){
        const post_textbox = document.getElementById("post_textbox");
        return post_textbox.value.length > 0
    }

    function submit(e){
        const send_btn = document.getElementById("post_send_btn")
        const post_textbox = document.getElementById("post_textbox");
        if (validate()){
            send_btn.innerHTML = "Sending..."
            send_btn.setAttribute("disabled","disabled")
            post_textbox.setAttribute("disabled","disabled")
            e.preventDefault();
            if (loggedin_user && loggedin_user.emails){
                if (AddPost(post, loggedin_user.emails[0].address)){
                    post_textbox.value = ""
                    definePost("")
                    send_btn.innerHTML = "Sent!"
                    setTimeout(function(){ send_btn.innerHTML = "Send" },2000)
                    send_btn.removeAttribute("disabled")
                    post_textbox.removeAttribute("disabled")
                }
            }


        }
    }


    return(
        <Form onSubmit={submit}>
            <FloatingLabel id="comment_label" label="Leave your comment here ;)">
                <Form.Control onChange={
                    (event) => definePost(event.target.value)
                } as="textarea" placeholder="Leave your comment here" style={{ height: '200px' }} className="mb-3" id="post_textbox" required/>
            </FloatingLabel>
            <Button id="post_send_btn" variant="primary" type="submit" className="fullButton mb-5" >Send</Button>
        </Form>
    )
}