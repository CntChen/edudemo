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