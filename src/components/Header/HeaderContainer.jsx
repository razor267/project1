import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.auth();
        /*authAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
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

export default connect(mapStateToProps, {setAuthUserData, auth})(HeaderContainer);