import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {updatePageDialogs} from "../Dialogs";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} onClick={()=>{updatePageDialogs(props.id)}} activeClassName={s.activeLink}><img src={props.avatar}/>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;