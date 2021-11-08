import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.myAvatar}/>
            {props.message}
            <div>
                <span>{props.likesCount} Like</span>
            </div>
        </div>
    );
}

export default Post;