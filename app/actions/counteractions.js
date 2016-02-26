/**
 * by CntChen 2016.02.26
 */

'use strict';

import * as types from './actiontypes';

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}