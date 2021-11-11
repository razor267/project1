import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
    return (
        <div className={s.friendsBar}>
            <div className={s.header}>Friends</div>
            <div className={s.f1}>
                <img src={props.friends[0].avatar}/>
                <div>{props.friends[0].name}</div>
            </div>
            <div className={s.f2}>
                <img src={props.friends[1].avatar}/>
                <div>{props.friends[1].name}</div>
            </div>
            <div className={s.f3}>
                <img src={props.friends[2].avatar}/>
                <div>{props.friends[2].name}</div>
            </div>
        </div>
    );
}

export default Friends;