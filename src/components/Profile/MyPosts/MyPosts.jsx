import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    let postsElements = props.state.posts.map(p => <Post myAvatar={props.state.myAvatar} message={p.message}
                                                         likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let newElementArrayId = props.state.posts.length + 1;
        props.dispatch(addPostActionCreator(newElementArrayId));
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    let onKeyDown = (e) => {
        if (e.keyCode === 13 && e.ctrlKey === true) {
            addPost();
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your message' onKeyDown={(e) => onKeyDown(e)} onChange={onPostChange}
                              ref={newPostElement} value={props.state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;