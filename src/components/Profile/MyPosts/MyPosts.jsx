import React from "react";
import { Field, reduxForm } from "redux-form";
import Post from "../Post/Post";
import { TextArea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import s from './MyPosts.module.css';

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likes_count={p.likes_count} key={p.id} />);

    let addNewPost = values => {
        props.addPost(values.newPostBody);
    };

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddPostFormRedux onSubmit={addNewPost} />
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>;
});

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newPostBody"
                    placeholder="Post Message ..." validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'profileAddPostForm'
})(AddPostForm);

export default MyPosts;
