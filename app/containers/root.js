

import React, { Component } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers/index';
import App from './app';

let initalState = {
  counter: 0,
};

const store = createStore(rootReducer);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}