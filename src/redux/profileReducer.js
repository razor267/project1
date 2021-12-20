import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_EDIT_MODE = 'SET_EDIT_MODE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'It\'s my first post', likesCount: 31},
        {id: 3, message: 'ITK', likesCount: 11}
    ],
    myAvatar: 'http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg',
    profile: null,
    status: "",
    editMode: false
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: action.id,
                message: action.newPostText,
                likesCount: 0
            };
            return {...state, newPostText: '', posts: [...state.posts, newPost]};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        case SET_EDIT_MODE: {
            return {...state, editMode: action.editMode};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newElementArrayId, newPostText) => ({
    type: ADD_POST,
    id: newElementArrayId,
    newPostText
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setEditMode = (editMode) => ({type: SET_EDIT_MODE, editMode});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
        dispatch(setEditMode(false));
    } else {

        let errorMessagePart = "";

        for (let i = 0; i < response.data.messages.length; i++) {
            errorMessagePart = response.data.messages[i].split('>').pop().split(')').shift().toLowerCase();
            dispatch(stopSubmit('edit-profile', {
                contacts: {[errorMessagePart]: response.data.messages[i]},
            }));
        }

        // dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        // return Promise.reject(response.data.messages[0]);
        // dispatch(stopSubmit('edit-profile', {"contacts": {"facebook": response.data.messages[0]}}));
    }
}

export default profileReducer;