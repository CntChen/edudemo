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
class MyComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      loginState: '',
    };
  }

  componentDidMount(){
    // get data from local system to get user login state
    // if use logined, goto mainpage
    // if use don't login, goto signin
    // if get user name goto login page
    setTimeout(() => {
      let loginState = 'REGISTER';// HAS_LOGIN HAS_LOGOUT REGISTER
      let targetId = '';
      switch(loginState){
        case 'HAS_LOGIN':
          targetId = 'MainPage';
          break;
        case 'HAS_LOGOUT':
        case 'REGISTER':
          targetId = 'SignIn';
          break;
        default:
          targetId = 'SignIn';
      }
      _navigator && _navigator.push({name: targetId, component: SignIn});
    }, 2000);
  }

  render() {
    _navigator = this.props.navigator;
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
export default connect(state => ({
    value: state.signin
  })
)(MyComponent);