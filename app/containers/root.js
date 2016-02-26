/**
 * by CntChen 2016.02.26
 */

'use strict';

import React, { Component } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers/index';
import App from '../components/index';
// import App from './app';

let initialState = {
  counter: 10,
  signin:{
    loginState: '',
    userName: '',
    loginSuccess: false,
    userInfo:{
      userName: '',
      password: '',
    },
  },
};

const store = createStore(rootReducer, initialState);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}