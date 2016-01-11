'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  ToolbarAndroid,
  TextInput,
  Text,
  TouchableOpacity,
} = React;

var _navigator;

var ToolBar = React.createClass({
  getInitialState: function(){
    return {
      toolBar: {
        iconSrc: '../../res/imgs/back.png',
        title: '首页',
      },
    }
  },

  render: function() {
    _navigator = this.props.navigator;
    return (
      <ToolbarAndroid
        navIcon={require('../../res/imgs/back.png')}
        onIconClicked={() => _navigator && _navigator.pop()}
        style={styles.toolbar}
        titleColor='white'
        title={this.state.toolBar.title}
      >
      </ToolbarAndroid>  
    );
  }
});

var LoginView = React.createClass({
  getInitialState: function(){
    return {
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
  },

  _onPressButton: function(targetId){
    switch(targetId)
    {
      case 'Submit':
        console.log(this.state);
        break;
      default:
        break;
    }
  },

  render: function() {
    _navigator = this.props.navigator;

    return (
      <View style={styles.login_view}>
        <View style={styles.login_info}>
          <Text style={styles.texthint}>{this.state.phone.hint}</Text>
          <TextInput
            style={styles.textinput}
            keyboardType = {'numeric'}
            onChangeText={(text) => this.setState({loginID: text})}
            placeholder = {this.state.phone.placeholder}
            value={this.state.text}
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
            value={this.state.text}
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
});

var MyComponent = React.createClass({
  getInitialState: function(){
    return {
    }
  },

  render: function() {
    _navigator = this.props.navigator;

    return (
      <View style={styles.container}>
        <ToolBar />
        <LoginView />
      </View>
    );
  }
});

var styles = StyleSheet.create({
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

var stylesVariables = {
  active_opacity: 0.8,
};

module.exports = MyComponent;