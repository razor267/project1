import React, {FC} from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followUnfollowInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

let Users: FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

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