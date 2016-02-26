/**
 * by CntChen 2016.02.26
 */
 
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Image,
  ToolbarAndroid,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import ToolBar from '../_common/toolbar';

import MainPage from '../mainpage';

import {LOGIN_URL} from '../../constants/urls';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#D4D4D4',
    height: 40,
  },
  login_view:{
    flex: 1,
  },
  login_info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 12,
    marginRight: 12,
  },
  texthint: {
    flex: 1,
    fontSize: 16,
  },
  textinput: {
    paddingLeft: 10,
    flex: 5,
    height: 40,
    backgroundColor: '#FF0000',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
  },
  btn_submit: {
    flex: 1,
    backgroundColor: '#00FF00',
  },
  submit_text:{
    fontSize:16,
  },
});

const stylesVariables = {
  active_opacity: 0.8,
};

class LoginView extends Component{
  constructor(props){
    super(props);
    this.state = {
      loginID: '',
      loginPW: '',
      phone: {
        hint: '+86',
        placeholder: '手机号',
      },
      password: {
        hint: '密码',
        placeholder: '填写密码',
      },
      submit:{
        id: 'Submit',
        text: '登录',
      },
    }
  }

  _onPressButton(targetId){
    switch(targetId)
    {
      case 'Submit':
        let {setLoginStateToHasLogin, loginSuccessCal} = this.props;
        fetch(LOGIN_URL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            loginID: this.state.loginID,
            loginPW: this.state.loginPW,
          })
        })
        .then((response) => response.text())
        .then((responseText) => JSON.parse(responseText))
        .then(function(responseJson){
          console.log(responseJson);
          setLoginStateToHasLogin('CntChen');
          loginSuccessCal();
        })
        .catch((error) => {
          console.warn(error);
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.login_view}>
        <View style={styles.login_info}>
          <Text style={styles.texthint}>{this.state.phone.hint}</Text>
          <TextInput
            style={styles.textinput}
            keyboardType = {'numeric'}
            onChangeText={(text) => this.setState({loginID: text})}
            placeholder = {this.state.phone.placeholder}
          />
        </View>
        <View style={styles.login_info}>
          <Text style={styles.texthint}>{this.state.password.hint}</Text>
          <TextInput
            style={styles.textinput}
            keyboardType = {'numbers-and-punctuation'}
            secureTextEntry = {true}
            onChangeText={(text) => this.setState({loginPW: text})}
            placeholder = {this.state.password.placeholder}
          />
        </View>
        <View style={styles.login_info}>
          <TouchableOpacity
            onPress={() => this._onPressButton(this.state.submit.id)}
            activeOpacity={stylesVariables.active_opacity}
            style={[styles.button, styles.btn_submit]}>
            <Text style={styles.submit_text}>{this.state.submit.text}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class MyComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    this._navigator;
  }

  loginSuccessCal(){
    this._navigator && this._navigator.resetTo({name: 'MainPage', component: MainPage});
  }

  render() {
    this._navigator = this.props.navigator;

    let {actions} = this.props;

    return (
      <View style={styles.container}>
        <ToolBar
        style = {styles.toolbar}
        title={'登录'}
        titleColor='white'
        //logo={require('../../res/imgs/backward.png')}
        navIcon={require('../../res/imgs/backward.png')}
        onIconClicked={() => {this._navigator && this._navigator.pop();}}
        contentInsetStart = {12}
        contentInsetEnd = {100}
        >
        </ToolBar>
        <LoginView {...actions} loginSuccessCal={this.loginSuccessCal.bind(this)}/>
      </View>
    );
  }
}


import {bindActionCreators} from 'redux';
import * as signinActions from '../../actions/signinactions';
import { connect } from 'react-redux';

export default connect(
  state => ({
  }),
  (dispatch) => ({
    actions: bindActionCreators(signinActions, dispatch)
  })
)(MyComponent);


