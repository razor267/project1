import React from "react";
import {
    newMessageActionCreator,
    setCurrentDialogActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)

// let AuthRedirectComponent = withAuthRedirect(DialogsContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

