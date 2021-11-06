import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {newMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

function GetUserUrl() {

    let url = window.location.href;
    let res;

    url[url.length - 1] <= 6 ? res = url[url.length - 1] - 1 : res = 0;

    return res
}

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.dialogs[GetUserUrl()].dialog.map(m => <Message message={m.message}
                                                                                      iOrNot={m.iOrNot}
                                                                                      avatar={props.state.dialogs[GetUserUrl()].avatar}/>);

    let newMessageElement = React.createRef();

    let newMessage = () => {
        let idDialog = GetUserUrl();
        let idMessage = props.state.dialogs[idDialog].dialog.length + 1
        props.dispatch(newMessageActionCreator(idMessage, idDialog));
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={newMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;