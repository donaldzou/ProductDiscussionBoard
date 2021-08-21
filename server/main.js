import { Meteor } from 'meteor/meteor';
import { PostsCollection } from "../imports/api/posts";
import { Random } from 'meteor/random';

Meteor.startup(() => {
    // Initializing the user
    if (!Accounts.findUserByEmail("johnny@appleseed.com")) {
        Accounts.createUser({
            email: "johnny@appleseed.com",
            password: "johnnyjohn"
        })
    }
    if (!Accounts.findUserByEmail("steve@appleseed.com")) {
        Accounts.createUser({
            email: "steve@appleseed.com",
            password: "steve"
        })
    }


    // Initializing Comments
    if (PostsCollection.find().count() === 0){
        PostsCollection.insert({
            id: Random.id,
            content: "Hello Word!!!",
            user_id: "johnny@appleseed.com",
            time: Date.now()
        })
    }

});
