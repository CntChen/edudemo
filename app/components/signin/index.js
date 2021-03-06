/**
 * by CntChen 2016.01.11
 */

'use strict';

import React, {
  Component,
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
} from 'react-native';
import Dimensions from'Dimensions';

import Register from './register';
import Login from './login';


const styles = StyleSheet.create({
  background_image: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  flex_row:{
    flex: 1,
    flexDirection: 'row',
  },
  flex_float_right:{
    justifyContent: 'flex-end',
  },
  bottom: {
    flexDirection: 'row',
    height: 60,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    width: 100,
    marginTop: 10,
    height: 40,
  },
  btn_register: {
    backgroundColor: '#555555',
    marginLeft: 20,
  },
  btn_login: {
    backgroundColor: '#CCCCCC',
    marginRight: 20,
  },
  text: {
    fontSize: 16,
  },
});

const stylesVariables = {
  active_opacity: 0.8,
};

let _navigator;
class MyComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      register: {
        id : 'Register',
        text: '免费注册',
        component: Register,
      },
      login:{
        id: 'Login',
        text: '登录',
        component: Login,
      },
    };
  }

  _onPressButton(target){
    _navigator && _navigator.push({name: target.id, component: target.component});
  }

  render() {
    _navigator = this.props.navigator;
    let {height, width} = Dimensions.get('window');

    return (
      <Image source={require('../../res/imgs/home.png')}
        resizeMode={Image.resizeMode.conver}
        style={[styles.background_image, {width:width,height:height}]}>
        <View style={styles.bottom}>
          <View style={styles.flex_row}>
            <TouchableOpacity onPress={() => this._onPressButton(this.state.register)} activeOpacity={stylesVariables.active_opacity} style={[styles.button, styles.btn_register]}>
              <Text style={styles.text}>{this.state.register.text}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.flex_row,styles.flex_float_right]}>
            <TouchableOpacity onPress={() => this._onPressButton(this.state.login)} activeOpacity={stylesVariables.active_opacity} style={[styles.button, styles.btn_login]}>
              <Text style={styles.text}>{this.state.login.text}</Text>
            </TouchableOpacity>
          </View> 
        </View>
      </Image>
    );
  }
}


export default MyComponent;