import * as types from '../actions/actiontypes';

export default function counter(state = {}, action) {
  console.log('signin---');

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
