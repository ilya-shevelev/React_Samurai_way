import React from "react";
import Post from "../Post/Post";
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, HAY' likes_count='15' />
                <Post message="It's my first post" likes_count='20' />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;