/**
 * by CntChen 2016.02.26
 */

'use strict';

import * as types from '../actions/actiontypes';

function signin(state, action) {
  switch (action.type) {
    case types.LOGIN_IN:
      return {
        loginSuccess: true,
      };
    case types.LOGIN_OUT:
      return state;
    default:
      return state;
  }
}

function setLoginState(state, action) {  
  switch (action.type) {
    case types.SET_LOGIN_STATE_TO_HAS_LOGIN:
      return Object.assign({}, state, {loginState: 'HAS_LOGIN',});
    case types.SET_LOGIN_STATE_TO_HAS_LOGOUT:
      return Object.assign({}, state, {loginState: 'HAS_LOGOUT',});
    case types.SET_LOGIN_STATE_TO_REGISTER:
      return Object.assign({}, state, {loginState: 'REGISTER',});
    default:
      return state;
  }
}

export default function(state = {}, action){
  return Object.assign({}, signin(state, action), setLoginState(state, action));
}
