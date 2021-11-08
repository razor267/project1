import React from "react";
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Nav/NavBar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar state={props.state.navBarFriends}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer state={props.state.dialogsPage} myAvatar={props.state.profilePage.myAvatar} dispatch={props.dispatch}/>}/>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;