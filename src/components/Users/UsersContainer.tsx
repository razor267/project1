import React from 'react'
import {useSelector} from 'react-redux'
import Loading from '../common/loading/loading'
import {getIsFetching} from '../../redux/usersSelectors'
import {Users} from './Users'

type UsersPagePropsType = {
    pageTitle: string
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {

    const isFetching = useSelector(getIsFetching)

    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Loading/> : null}
        <Users/>
    </>
}
