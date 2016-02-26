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


let _navigator;
let _actions;
class MyComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    // get data from local system to get user login state
    // if use logined, goto mainpage
    // if use don't login, goto signin
    // if get user name goto login page
    setTimeout(() => {
      console.log(_actions && _actions.SET_LOGIN_STATE_TO_HAS_LOGIN('CntChen'));
    }, 2000);
  }

  componentWillReceiveProps(nextProps){
    let { value } = nextProps;

    switch (value.loginState) {
      case 'HAS_LOGIN':
        _navigator && _navigator.push({name: 'MainPage', component: MainPage});
        break;
      case 'HAS_LOGOUT':
      case 'REGISTER':
        _navigator && _navigator.push({name: 'SignIn', component: SignIn});
        break;
      default:
        _navigator && _navigator.push({name: 'SignIn', component: SignIn});
    }
  }

  render() {
    _navigator = this.props.navigator;
    _actions = this.props.actions;

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
    value: state.signin
  }),
  (dispatch) => ({
    actions: bindActionCreators(signinActions, dispatch)
  })
)(MyComponent);