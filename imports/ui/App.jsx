import React from 'react';
import { LoginModule } from "./LoginModule.jsx";
import { NavBar } from "./navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data';
import {DiscussionModule} from "./DiscussionModule";




export function App(){
    const loggedin_user = useTracker(() => Meteor.user());
    return (
        <div>
            <NavBar currentUser={Meteor.users.findOne({ _id: Meteor.userId() })} />
            {loggedin_user ? (
                <DiscussionModule currentUser={Meteor.users.findOne({ _id: Meteor.userId() })} />
            ):(
                <LoginModule/>
            )}
        </div>
    )



    // if (Meteor.user()){
    //     return (
    //         <div>
    //             <NavBar/>
    //         </div>
    //     )
    // }else {
    //     return(
    //         <div>
    //             <NavBar/>
    //             <LoginModule/>
    //         </div>
    //     )
    // }
}
