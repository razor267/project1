import React from "react";
import {newMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/gialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
        return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let myAvatar = store.getState().profilePage.myAvatar;

                    let newMessage = (idMessage, idDialog) => {
                        store.dispatch(newMessageActionCreator(idMessage, idDialog));
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }
                 return (<Dialogs dialogs={state} myAvatar={myAvatar} newMessage={newMessage} updateNewMessageText={onMessageChange}/>)
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;