import {updateObjectInArray} from '../utils/objectHelpers'
import {UserType} from '../types/types'
import {BaseThunkType, InferActionsTypes} from './reduxStore'
import {Dispatch} from 'redux'
import {usersAPI} from '../api/users-api'
import {APIResponseType} from '../api/api'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followUnfollowInProgress: [] as Array<number>
}
export type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {

    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                /*  users: state.users.map(u => {
                      if (u.id === action.userId) {
                          return {...u, followed: true}
                      }
                      return u;
                  })*/
            }
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                /* users: state.users.map(u => {
                     if (u.id === action.userId) {
                         return {...u, followed: false}
                     }
                     return u;
                 })*/
            }
        case 'SN/USERS/SET_USERS': {
            return {...state, users: action.users}
        }
        case 'SN/USERS/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'SN/USERS/TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'SN/USERS/TOGGLE_FOLLOW_UNFOLLOW_IN_PROGRESS': {
            return {
                ...state,
                followUnfollowInProgress: action.isFetching
                    ? [...state.followUnfollowInProgress, action.userId]
                    : state.followUnfollowInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowUnfollowInProgress: (isFetching: boolean, userId: number) => ({
        type: 'SN/USERS/TOGGLE_FOLLOW_UNFOLLOW_IN_PROGRESS',
        isFetching,
        userId
    } as const)
}

type ThunkType = BaseThunkType<ActionsTypes>

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number,
                                   apiMethod: (userId: number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowUnfollowInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowUnfollowInProgress(false, userId))
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {

        dispatch(actions.setCurrentPage(page))
        dispatch(actions.toggleIsFetching(true))
        let data = await usersAPI.requestUsers(page, pageSize)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}

export default usersReducer