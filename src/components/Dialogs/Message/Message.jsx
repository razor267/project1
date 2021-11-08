import React from "react";
import s from './Message.module.css';

const Message = (props) => {
    // return <div className={s.message}><img src='https://topmsg.ru/wp-content/uploads/anonymous.jpg'/>{props.message}</div>

    if (props.iOrNot == true) {
        return (
            <div className={s.message}>
                <div className={s.i}>{props.message}<img src={props.myAvatar}/></div>
            </div>
        )
    } else {
        return (
            <div className={s.message}>
                <div className={s.friend}><img src={props.avatar}/>{props.message}</div>
            </div>
        )
    }
}

export default Message;