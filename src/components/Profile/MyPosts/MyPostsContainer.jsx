import React from "react";
import {actions} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (id, newPostText)=>{
            dispatch(actions.addPostActionCreator(id, newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;