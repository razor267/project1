import React from "react";
import {newMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/gialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage,
        myAvatar: state.profilePage.myAvatar
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: (idMessage, idDialog) => {
            dispatch(newMessageActionCreator(idMessage, idDialog));
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;