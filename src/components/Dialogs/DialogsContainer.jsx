import React from "react";
import {
    newMessageActionCreator,
    setCurrentDialogActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class DialogsContainer extends React.Component {

    render() {
        return <Dialogs {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage,
        myAvatar: state.profilePage.myAvatar,
        currentDialog: state.dialogsPage.currentDialog
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: (idMessage, idDialog) => {
            dispatch(newMessageActionCreator(idMessage, idDialog));
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        setCurrentDialog: (currentDialog) => {
            dispatch(setCurrentDialogActionCreator(currentDialog));
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(DialogsContainer);

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

