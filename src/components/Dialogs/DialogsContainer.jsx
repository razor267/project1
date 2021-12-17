import React from "react";
import {
    newMessageActionCreator,
    setCurrentDialogActionCreator
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
        profile: state.profilePage.profile,
        dialogs: state.dialogsPage,
        currentDialog: state.dialogsPage.currentDialog
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: (idMessage, idDialog, message_area) => {
            dispatch(newMessageActionCreator(idMessage, idDialog, message_area));
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

