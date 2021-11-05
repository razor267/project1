import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.kinonews.ru/insimgs/2018/newsimg/newsimg83415.jpg'/>
            {props.message}
            <div>
                <span>{props.likesCount} Like</span>
            </div>
        </div>
    );
}

export default Post;