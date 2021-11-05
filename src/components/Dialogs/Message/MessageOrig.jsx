import React from "react";
import s from './Message.module.css';

const Message = (props) => {
    return <div className={s.message}><img src='https://topmsg.ru/wp-content/uploads/anonymous.jpg'/>{props.message}</div>
}

export default Message;