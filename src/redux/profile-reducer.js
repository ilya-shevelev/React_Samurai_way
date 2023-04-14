import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'samurai-network/auth/ADD-POST';
const SET_USER_PROFILE = 'samurai-network/auth/SET-USER-PROFILE';
const SET_STATUS = 'samurai-network/auth/SET_STATUS';
const DELETE_POST = 'samurai-network/auth/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'samurai-network/auth/SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi', likes_count: 12 },
        { id: 2, message: 'blabla', likes_count: 11 },
        { id: 3, message: "it's my first post", likes_count: 13 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostBody,
                likes_count: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id != action.postId) }
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(response.data));
        }
    } catch (error) {
        // alert('error occured');
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    debugger;
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('editProfile', { '_error': response.data.messages[0] }));
        // dispatch(stopSubmit('editProfile', { 'contacts': {'facebook': response.data.messages[0] }}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;
