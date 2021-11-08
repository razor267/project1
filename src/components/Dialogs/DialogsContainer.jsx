import React from "react";
import {newMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/gialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let newMessage = (idMessage, idDialog) => {
        props.dispatch(newMessageActionCreator(idMessage, idDialog));
    }

    let onMessageChange = (text) => {
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (<Dialogs dialogs={props.state} myAvatar={props.myAvatar} newMessage={newMessage} updateNewMessageText={onMessageChange}/>)
}

export default DialogsContainer;