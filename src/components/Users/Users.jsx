import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>
        {
            users.map(u => <User user={u}
                                 followUnfollowInProgress={props.followUnfollowInProgress}
                                 follow={props.follow}
                                 unfollow={props.unfollow}
                                 key={u.id}/>)
        }
        <Paginator currentPage={currentPage}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}/>
    </div>
}

export default Users;