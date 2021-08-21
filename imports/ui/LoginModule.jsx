import React from 'react';
import {Container} from "react-bootstrap";
import "../../client/main.css"
import {LoginForm} from "./LoginForm";

export const LoginModule = () => {
    return (
        <Container>
            <div className="LoginFrame">
                <LoginForm />
            </div>
        </Container>
    )
}
