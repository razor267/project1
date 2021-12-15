import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
    let postsElements = [...props.state.posts]
        .reverse()
        .map(p => <Post myAvatar={props.state.myAvatar} message={p.message}
                        likesCount={p.likesCount} key={p.id}/>);

    let addPost = (values) => {
        let newElementArrayId = props.state.posts.length + 1;
        props.addPost(newElementArrayId, values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' placeholder='Enter your message' component={Textarea}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;