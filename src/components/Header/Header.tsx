import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}

export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCGuyFs-eh7eEkapIpuvWtQ9Gpwu04S5amQ&usqp=CAU'/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;