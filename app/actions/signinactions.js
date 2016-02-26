/**
 * by CntChen 2016.02.26
 */

'use strict';

import * as types from './actiontypes';

export function loginIn() {
  return {
    type: types.LOGIN_IN
  };
}

export function loginOut(username, password) {
  return {
    type: types.LOGIN_OUT
  };
}

export function register() {
  return {
    type: types.REGISTER
  };
}

export function findPassword() {
  return {
    type: types.FINDPASSWORD
  };
}




export function SET_LOGIN_STATE_TO_HAS_LOGIN(username) {
  return {
    type: types.SET_LOGIN_STATE_TO_HAS_LOGIN,
    username: username,
  };
}

export function SET_LOGIN_STATE_TO_HAS_LOGOUT(username) {
  return {
    type: types.SET_LOGIN_STATE_TO_HAS_LOGOUT,
    username: username,
  };
}

export function SET_LOGIN_STATE_TO_REGISTER() {
  return {
    type: types.SET_LOGIN_STATE_TO_REGISTER,
  };
}