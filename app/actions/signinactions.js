/**
 * by CntChen 2016.02.26
 */

'use strict';

import * as types from './actiontypes';


export function setLoginStateToHasLogin(userName) {
  return {
    type: types.SET_LOGIN_STATE_TO_HAS_LOGIN,
    userName: userName,
  };
}

export function setLoginStateToHasLogout(userName) {
  return {
    type: types.SET_LOGIN_STATE_TO_HAS_LOGOUT,
    userName: userName,
  };
}

export function setLoginStateToRegister() {
  return {
    type: types.SET_LOGIN_STATE_TO_REGISTER,
  };
}