import React,{useState} from 'react';
import "../../client/main.css"
import {FloatingLabel, Form, Button, Alert} from "react-bootstrap";
import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'

export const LoginForm = () => {
    const [email, defineEmail] = useState("")
    const [password, definePassword] = useState("")
    const [error, defineError] = useState(false)
    var error_msg = ""
    function submit(e){
        const login_btn = document.getElementById("login_btn")
        login_btn.innerHTML = "Login..."
        login_btn.setAttribute("disabled","disabled")
        e.preventDefault()
        if (email.length === 0 || password.length === 0){
            document.getElementById("error_alert").innerHTML = "Please fill in all textbox."
            return
        }
        Meteor.loginWithPassword(email, password, function(exception){
            if (exception){
                document.getElementById("error_alert").innerHTML = "Oops! Your email and password does not match."
                defineError(true)
            }else{
                Session.set("email", email)
            }
            login_btn.innerHTML = "Login"
            login_btn.removeAttribute("disabled")
        })
    }
    return(
        <Form onSubmit={submit}>
            <h1 className="LoginHeader mb-4">Login to Discuss</h1>
            {error ? (
                <Alert variant="danger" id="error_alert">
                    {error_msg}
                </Alert>
            ):("")}
            <Form.Group className="mb-2" controlId="username">
                <FloatingLabel controlId="email_label" label="Email" className="mb-1" >
                    <Form.Control type="email" placeholder="johnny@appleseed.com" value={email} onChange={(event) => defineEmail(event.target.value)} required/>
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
                <FloatingLabel controlId="password_label" label="Password" className="mb-1" >
                    <Form.Control type="password" placeholder="password" value={password} onChange={(event) => definePassword(event.target.value)} required/>
                </FloatingLabel>
            </Form.Group>
            <Button variant="primary" type="submit" className="fullButton" id="login_btn">Login</Button>
        </ Form>
    )
}