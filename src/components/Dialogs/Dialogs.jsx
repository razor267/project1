import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function GetUserUrl(length) {
    let url = window.location.href;
    let res;
    url[url.length - 1] <= length ? res = url[url.length - 1] - 1 : res = 0;
    return res
}

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>);
    let messagesElements = props.dialogs.dialogs[GetUserUrl(props.dialogs.dialogs.length)].dialog.map(m => <Message message={m.message}
                                                                                        iOrNot={m.iOrNot}
                                                                                        avatar={props.dialogs.dialogs[GetUserUrl(props.dialogs.dialogs.length)].avatar}
                                                                                        myAvatar={props.myAvatar} key={m.id}/>);

    let newMessage = () => {
        let idDialog = GetUserUrl(props.dialogs.dialogs.length);
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