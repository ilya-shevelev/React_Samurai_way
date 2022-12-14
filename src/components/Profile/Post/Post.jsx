import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://preview.redd.it/wtc3gq9qhe041.jpg?auto=webp&s=59263396dfaccee7362a7d5dce235c2d1810a4cf" />
            {props.message}
            <div>
                <span>like {props.likes_count}</span>
            </div>
        </div>
    );
};

export default Post;