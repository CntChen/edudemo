/**
 * by CntChen 2016.01.11
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
} = React;

var _navigator;

var MyComponent = React.createClass({
  getInitialState: function(){
    return {
      register: {
        id : 'Register',
        text: '免费注册',
      },
      login:{
        id: 'Login',
        text: '登录',
      },
    }
  },

  _onPressButton: function(targetId){
    _navigator && _navigator.push({name: targetId});
  },

  render: function() {
    _navigator = this.props.navigator;
    return (
      <View style={styles.container}>
        <View style={styles.bottom}>
          <View style={styles.flex_row}>
            <TouchableOpacity onPress={() => this._onPressButton(this.state.register.id)} activeOpacity={stylesVariables.active_opacity} style={[styles.button, styles.btn_register]}>
              <Text style={styles.text}>{this.state.register.text}</Text>
            </TouchableOpacity>
          </View> 
          <View style={[styles.flex_row,styles.flex_float_right]}>
            <TouchableOpacity onPress={() => this._onPressButton(this.state.login.id)} activeOpacity={stylesVariables.active_opacity} style={[styles.button, styles.btn_login]}>
              <Text style={styles.text}>{this.state.login.text}</Text>
            </TouchableOpacity>
          </View> 
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00FFFF',
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

var stylesVariables = {
  active_opacity: 0.8,
};

module.exports = MyComponent;