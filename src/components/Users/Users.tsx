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
import {useHistory} from 'react-router-dom'
import * as queryString from 'querystring'

type PropsType = {}

type QueryParamsType = { term?: string; page?: string; friend?: string }
export const Users: FC<PropsType> = (props) => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followUnfollowInProgress = useSelector(getFollowUnfollowInProgress)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substring(1)) as QueryParamsType
        let actualPage = currentPage
        let actualFilter = filter
        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        if (!!parsed.friend) actualFilter = {
            ...actualFilter,
            friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query:QueryParamsType = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)
        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

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