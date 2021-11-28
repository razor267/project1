import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Login from "../Login/Login";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    debugger
    let dialogId = props.currentDialog;
    let currentDialog = dialogId - 1

    let onDialogChange = (id) => {
        props.setCurrentDialog(id);
    }

    let newMessage = () => {
        let idDialog = currentDialog;
        let idMessage = props.dialogs.dialogs[idDialog].dialog.length + 1
        debugger;
        props.newMessage(idMessage, idDialog);
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    let onKeyDown = (e) => {
        if (e.keyCode === 13 && e.ctrlKey === true) {
            newMessage();
        }
    }

    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}
                                                                     key={d.id}
                                                                     currentDialog={props.dialogs.currentDialog}
                                                                     onDialogChange={onDialogChange}/>);

    if (props.isAuth === false) return <Redirect to={'/login'}/>;


    if (!dialogId) {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems} onClick={onMessageChange}>
                    {dialogsElements}
                </div>
            </div>
        )
    }
    let messagesElements = props.dialogs.dialogs[currentDialog].dialog.map(m => <Message
        message={m.message}
        iOrNot={m.iOrNot}
        avatar={props.dialogs.dialogs[currentDialog].avatar}
        myAvatar={props.myAvatar} key={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems} onClick={onMessageChange}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <div>
                    <textarea placeholder='Enter your message' onKeyDown={(e) => onKeyDown(e)}
                              onChange={onMessageChange}
                              value={props.dialogs.newMessageText}/>
                </div>
                <div>
                    <button onClick={newMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;