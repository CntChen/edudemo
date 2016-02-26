/**
 * by CntChen 2016.02.26
 */

'use strict';

import {combineReducers} from 'redux';
import counter from './counter';
import signin from './signin';

export default combineReducers({
 counter,
 signin,
})


