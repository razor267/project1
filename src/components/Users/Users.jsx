import React from "react";
import styles from './Users.module.css';
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let FirstPages = () => {
        return (
            <>
                {currentPage != 1 && <span onClick={(e) => {
                    onPageChanged(currentPage - 1)
                }}>{'< '}</span>}
                {currentPage > 5 &&
                <span onClick={(e) => {
                    onPageChanged(1)
                }}>1</span>
                }
                {currentPage > 5 && <span className={styles.cursor}>......</span>}
            </>
        )
    }

    let LastsPages = () => {
        return (
            <>
                {pagesCount - currentPage >= 5 && <span className={styles.cursor}>......</span>}
                {pagesCount - currentPage >= 5 && <span onClick={(e) => {
                    onPageChanged(pagesCount)
                }}>{pagesCount}</span>}

                {currentPage != pagesCount && <span onClick={(e) => {
                    onPageChanged(currentPage + 1)
                }}> ></span>}
            </>
        )
    }

    return <div>
        {
            users.map(u => <User user={u}
                                 followUnfollowInProgress={props.followUnfollowInProgress}
                                 follow={props.follow}
                                 unfollow={props.unfollow}
                                 key={u.id}/>)
        }
        <div className={styles.pagination}>
            <FirstPages/>
            {pages.map(p => {
                if (currentPage - p <= 4 && currentPage - p >= -4) {
                    return (
                        <span className={currentPage === p && styles.selectedPage} onClick={(e) => {
                            onPageChanged(p)
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