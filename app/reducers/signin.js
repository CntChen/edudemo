/**
 * by CntChen 2016.02.26
 */

'use strict';

import * as types from '../actions/actiontypes';

function signin(state, action) {
  switch (action.type) {
    case types.LOGIN_IN:
      return Object.assign({}, state, {loginSuccess: true,});
    case types.LOGIN_OUT:
      return state;
    default:
      return state;
  }
}

function setLoginState(state, action) {  
  switch (action.type) {
    case types.SET_LOGIN_STATE_TO_HAS_LOGIN:
      return Object.assign({}, state, {loginState: 'HAS_LOGIN',userName: action.userName});
    case types.SET_LOGIN_STATE_TO_HAS_LOGOUT:
      return Object.assign({}, state, {loginState: 'HAS_LOGOUT',userName: action.userName});
    case types.SET_LOGIN_STATE_TO_REGISTER:
      return Object.assign({}, state, {loginState: 'REGISTER',});
    default:
      return state;
  }
}

export default function(state = {}, action){
  let newState = Object.assign({}, signin(state, action));
  newState = Object.assign({}, setLoginState(newState, action));

  return newState;
}
