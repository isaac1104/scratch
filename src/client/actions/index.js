import axios from 'axios';
import * as types from './types';
import { SecureStore } from 'expo';

export const saveTableNumber = number => ({
  type: types.SAVE_TABLE_NUMBER,
  payload: number
});

export const saveUserId = id => ({
  type: types.SAVE_USER_ID,
  payload: id
});

export const saveLocationId = id => ({
  type: types.SAVE_LOCATION_ID,
  payload: id
});

export const setKitchenView = bool => ({
  type: types.SET_KITCHEN_VIEW,
  payload: bool
});

const userAuthRequest = () => ({
  type: types.USER_AUTH_REQUEST,
  payload: true
});

const userAuthSuccess = token => ({
  type: types.USER_AUTH_SUCCESS,
  payload: token
});

const userAuthFail = error => ({
  type: types.USER_AUTH_FAIL,
  payload: error
});

const userAuthSignout = () => ({
  type: types.USER_AUTH_SIGNOUT,
  payload: ''
});

export const signin = (userInfo, callback) => async dispatch => {
  dispatch(userAuthRequest());
  const request = await axios.post('http://159.89.143.187/api/login', userInfo);
  const { data } = request;
  if (data.message === 'Good') {
    dispatch(userAuthSuccess(data.session_token));
    // await SecureStore.setItemAsync('token', data.session_token);
    callback();
  } else {
    dispatch(userAuthFail('Wrong Email and Password Combination'));
  }
};

export const signout = callback => async dispatch => {
  await SecureStore.deleteItemAsync('token');
  dispatch(userAuthSignout());
  callback();
};
