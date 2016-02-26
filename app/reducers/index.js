/**
 * by CntChen 2016.02.26
 */

'use strict';

import {combineReducers} from 'redux';
import counter from './counter';
import signin from './signin';

// production
// export default combineReducers({
//  counter,
//  signin,
// })

// dev: 监控 state
export default function(state = {}, action){

  let newState = Object.assign(
    {},
    {
      counter: counter(state.counter, action),
      signin: signin(state.signin, action)
    }
  );

  console.log(newState);
  return newState;
}

