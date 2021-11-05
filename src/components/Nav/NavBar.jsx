import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) => {
    return (
        <div className={s.navBar}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
            <Friends friends={props.state}/>
        </div>
    );
}

export default NavBar;