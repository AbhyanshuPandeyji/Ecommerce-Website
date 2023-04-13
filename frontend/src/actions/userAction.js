import {
    CLEAR_ERRORS, 
    LOGIN_FAIL, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL ,
}
from "../constants/userConstant"

import axios from 'axios';

// same as the product actions 
// Login - call this func tion in the login page
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        // posting the data given by the user and storing its response in the data
        const { data } = await axios.post(
        `/api/v1/login`,
        { email, password },
        config
        );

        // then giving the data back to the reducer to change the state
        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    }   catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
};

// register 
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        // multipart because image is included
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        // posting the data given by the user and storing its response in the data
        const { data } = await axios.post(
        `/api/v1/register`,
        userData,
        config
        );

        // then giving the data back to the reducer to change the state
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    }   catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.message });
    }
};


// Loading User - this is the get user profile 
export const loadUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });


        const config = { headers: { "Content-Type": "application/json" } };

        // posting the data given by the user and storing its response in the data
        const { data } = await axios.get(
        `/api/v1/me`,
        { email, password },
        );

        // then giving the data back to the reducer to change the state
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    }   catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
};


// Clearing the errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
}


