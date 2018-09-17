import axios from 'axios';
import * as types from './types';

export const saveTableNumber = number => ({
  type: types.SAVE_TABLE_NUMBER,
  payload: number
});

export const saveDeviceUUID = uuid => ({
  type: types.SAVE_DEVICE_UUID,
  payload: uuid
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

export const signin = (info, callback) => async dispatch => {
  dispatch(userAuthRequest());
  const request = await axios.post('http://159.89.143.187/api/login', info);
  const { data } = request;
  if (data.message === 'Good') {
    console.log(data.session_token);
    dispatch(userAuthSuccess(data.session_token));
    callback();
  } else {
    dispatch(userAuthFail('Wrong Email and Password Combination'));
  }
};
