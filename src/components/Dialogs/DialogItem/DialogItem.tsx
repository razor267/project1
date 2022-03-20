import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import cn from "classnames";

type PropsType = {
    id: number
    onDialogChange: (id: number) => void
    currentDialog: number
    avatar: string
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog} onClick={(e) => {
            props.onDialogChange(props.id)
        }}>
            <NavLink to={path} className={cn({[s.activeLink]: props.currentDialog === props.id})}><img
                src={props.avatar}/>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;