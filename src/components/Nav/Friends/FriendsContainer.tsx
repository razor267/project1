import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {AppStateType} from "../../../redux/reduxStore";

let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.navBarFriends
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;