import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = (props) => {
    return (<div>
        <div>
            <img src='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRODAepevJESvKmoYWQ8YAJJQO0j_a_ZgVaTFAobP3lXgETKX-kTOowNQH9_zxyUGC-aLS53LuzzNt0qys8gO4'></img>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>);
};

export default Profile;