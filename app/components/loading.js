/**
 * by CntChen 2016.02.26
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Image,
  Navigator,
} from 'react-native';
import Dimensions from'Dimensions';

import SignIn from './signin/index';
import MainPage from './mainpage';

let styles = StyleSheet.create({
  background_image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

class MyComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
    };

    this._navigator;
    this._actions;
  }

  componentDidMount(){
    // get data from local system to get user login state
    // if use logined, goto mainpage
    // if use don't login, goto signin
    // if get user name goto login page
    setTimeout(() => {
      let userName = 'CntChen';
      // this._actions && this._actions.setLoginStateToHasLogin(userName);
      this._actions && this._actions.setLoginStateToHasLogout(userName);
    }, 1000);
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  componentWillReceiveProps(nextProps){
    let loginState = nextProps.value;

    switch (loginState) {
      case 'HAS_LOGIN':
        this._navigator && this._navigator.resetTo({name: 'MainPage', component: MainPage});
        break;
      case 'HAS_LOGOUT':
      case 'REGISTER':
        this._navigator && this._navigator.resetTo({name: 'SignIn', component: SignIn});
        break;
      default:
        this._navigator && this._navigator.resetTo({name: 'SignIn', component: SignIn});
    }
  }

  render() {
    this._navigator = this.props.navigator;
    this._actions = this.props.actions;

    let {height, width} = Dimensions.get('window');
    return (
      <Image source={require('../res/imgs/loading.png')}
        resizeMode={Image.resizeMode.conver}
        style={[styles.background_image, {width:width,height:height}]}>
      </Image>
    );
  }
}


import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as signinActions from '../actions/signinactions';
export default connect(state => ({
    value: state.signin.loginState
  }),
  (dispatch) => ({
    actions: bindActionCreators(signinActions, dispatch)
  })
)(MyComponent);