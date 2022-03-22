import React, {Component} from 'react'
import './App.css'
import NavBar from './components/Nav/NavBar'
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {UsersPage} from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import {LoginPage} from './components/Login/LoginPage'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/appReducer'
import Loading from './components/common/loading/loading'
import store, {AppStateType} from './redux/reduxStore'
import {withSuspense} from './hoc/withSuspense'

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured');
        // console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Loading/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/dialogs' render={() => <SuspendedDialogs/> }/>
                        <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/users' render={() => <UsersPage pageTitle={"Самураи"}/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});

// export default compose(
let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;