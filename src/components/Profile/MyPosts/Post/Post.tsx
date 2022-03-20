import React from "react";
import s from './Post.module.css';

type PropsType = {
    myAvatar: string | null
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src={props.myAvatar as string}/>
            {props.message}
            <div>
                <span>{props.likesCount} Like</span>
            </div>
        </div>
    );
}

export default Post;