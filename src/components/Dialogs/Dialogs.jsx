import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let dialogId = props.currentDialog;
    let currentDialog = dialogId - 1

    let onDialogChange = (id) => {
        props.setCurrentDialog(id);
    }

    let newMessage = (values) => {
        let idDialog = currentDialog;
        let idMessage = props.dialogs.dialogs[idDialog].dialog.length + 1
        props.newMessage(idMessage, idDialog, values.message_area);
    }

    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}
                                                                     key={d.id}
                                                                     currentDialog={props.dialogs.currentDialog}
                                                                     onDialogChange={onDialogChange}/>);

    if (props.isAuth === false) return <Redirect to={'/login'}/>;


    if (!dialogId) {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
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
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageForm onSubmit={newMessage}/>
        </div>
    )
}

export default Dialogs;