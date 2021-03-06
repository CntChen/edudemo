/**
 * by CntChen 2016.02.26
 */

'use strict';

import * as types from '../actions/actiontypes';

export default function counter(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}