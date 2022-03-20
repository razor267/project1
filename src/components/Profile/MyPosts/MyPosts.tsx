import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm, {AddPostFormValuesType} from "./AddPostForm/AddPostForm";
import {ProfileInitialStateType} from "../../../redux/profileReducer";

export type MapPropsType = {
    state: ProfileInitialStateType
}
export type DispatchPropsType = {
    addPost: (id: number, newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    if (!props.state.profile) {
        return null
    }

    let postsElements = [...props.state.posts]
        .reverse()
        .map(p => <Post myAvatar={props.state.profile && props.state.profile.photos.large} message={p.message}
                        likesCount={p.likesCount} key={p.id}/>);

    let addPost = (values: AddPostFormValuesType) => {
        let newElementArrayId = props.state.posts.length + 1;
        props.addPost(newElementArrayId, values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <AddPostForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;