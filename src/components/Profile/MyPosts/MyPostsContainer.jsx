import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (id)=>{
            dispatch(addPostActionCreator(id));
        },
        updateNewPostText: (text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;