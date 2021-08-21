import { Mongo } from 'meteor/mongo';
import { Random } from 'meteor/random';

export const PostsCollection = new Mongo.Collection('posts');

export function AddPost(content,user_id){
    let status = true

    if (content.length && user_id.length){
        PostsCollection.insert({
            id: Random.id,
            content: content,
            user_id: user_id,
            time: Date.now()
        }, function (error){
            if (error){
                status = false
            }
        })
    }
    return status
}
