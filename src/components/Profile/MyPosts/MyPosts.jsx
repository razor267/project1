import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.posts.map(p => <Post myAvatar={props.posts.myAvatar} message={p.message}
                                                         likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let newElementArrayId = props.posts.posts.length + 1;
        props.addPost(newElementArrayId);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                              ref={newPostElement} value={props.posts.newPostText}/>
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