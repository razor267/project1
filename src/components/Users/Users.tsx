import React, {FC, useEffect} from 'react'
import User from './User'
import Paginator from '../common/Paginator/Paginator'
import {UsersSearchForm} from './UsersSearchForm'
import {FilterType, requestUsers} from '../../redux/usersReducer'
import {useDispatch, useSelector} from 'react-redux'
import {
    getCurrentPage,
    getFollowUnfollowInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from '../../redux/usersSelectors'

type PropsType = {
}

export const Users: FC<PropsType> = (props) => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followUnfollowInProgress = useSelector(getFollowUnfollowInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    },[])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const follow = (userId: number) => {
        dispatch(follow(userId))
    }

    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <div>

        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        {
            users.map(u => <User user={u}
                                 followUnfollowInProgress={followUnfollowInProgress}
                                 follow={follow}
                                 unfollow={unfollow}
                                 key={u.id}/>)
        }
        <Paginator currentPage={currentPage}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}/>
    </div>
}