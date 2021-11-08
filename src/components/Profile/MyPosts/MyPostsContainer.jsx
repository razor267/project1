import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPost = (id) => {
        props.store.dispatch(addPostActionCreator(id));
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (<MyPosts posts={props.store.state} addPost={addPost} updateNewPostText={onPostChange}/>);
}

export default MyPostsContainer;