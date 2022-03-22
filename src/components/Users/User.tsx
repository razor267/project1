import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg';
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType
    followUnfollowInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followUnfollowInProgress, follow, unfollow}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followUnfollowInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button>
                        : <button disabled={followUnfollowInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
        </div>
    )
}

export default User;