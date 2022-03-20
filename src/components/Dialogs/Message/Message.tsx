import React from "react";
import s from './Message.module.css';

type PropsType = {
    iOrNot: boolean
    message: string
    myAvatar: string | null
    avatar: string
}

const Message: React.FC<PropsType> = (props) => {

    if (props.iOrNot == true) {
        return (
            <div className={s.message}>
                <div className={s.i}>{props.message}<img src={props.myAvatar as string}/></div>
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