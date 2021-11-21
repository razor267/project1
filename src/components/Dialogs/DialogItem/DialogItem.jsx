import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog} onClick={(e)=>{props.onDialogChange(props.id)}}>
            <NavLink to={path} className={props.currentDialog===props.id && s.activeLink}><img src={props.avatar}/>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;