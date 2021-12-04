import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
        /*authAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, Login, email} = data.data;
                    this.props.setAuthUserData(id, email, Login);
                }
            })*/
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);