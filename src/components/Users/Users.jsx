import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg';
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let FirstPages = () => {
        return (
            <>
                {props.currentPage != 1 && <span onClick={(e) => {
                    props.onPageChanged(props.currentPage - 1)
                }}>{'< '}</span>}
                {props.currentPage > 5 &&
                <span onClick={(e) => {
                    props.onPageChanged(1)
                }}>1</span>
                }
                {props.currentPage > 5 && <span className={styles.cursor}>......</span>}
            </>
        )
    }

    let LastsPages = () => {
        return (
            <>
                {pagesCount - props.currentPage >= 5 && <span className={styles.cursor}>......</span>}
                {pagesCount - props.currentPage >= 5 && <span onClick={(e) => {
                    props.onPageChanged(pagesCount)
                }}>{pagesCount}</span>}

                {props.currentPage != pagesCount && <span onClick={(e) => {
                    props.onPageChanged(props.currentPage + 1)
                }}> ></span>}
            </>
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followUnfollowInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id);
                            /*props.toggleFollowUnfollowInProgress(true, u.id);
                            usersAPI.unfollow(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowUnfollowInProgress(false, u.id);
                            })*/
                        }}>Unfollow</button>
                        : <button disabled={props.followUnfollowInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                            /*props.toggleFollowUnfollowInProgress(true, u.id);
                            usersAPI.follow(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.toggleFollowUnfollowInProgress(false, u.id);
                            })*/
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
        <div className={styles.pagination}>
            <FirstPages/>
            {pages.map(p => {
                if (props.currentPage - p <= 4 && props.currentPage - p >= -4) {
                    return (
                        <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                            props.onPageChanged(p)
                        }}>{p + ' | '}
                    </span>
                    )
                }
            })}
            <LastsPages/>
        </div>
    </div>
}

export default Users;