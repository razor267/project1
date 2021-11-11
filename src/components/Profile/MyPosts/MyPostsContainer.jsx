import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = (id) => {
                        store.dispatch(addPostActionCreator(id));
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }

                    return <MyPosts state={state.profilePage} addPost={addPost}
                                    updateNewPostText={onPostChange}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;