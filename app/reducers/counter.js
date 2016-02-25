import * as types from '../actions/actiontypes';

export default function counter(state = 0, action) {
  console.log('counter---');
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}