import React from "react";
import {actions} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage,
        dialogs: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(DialogsContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

