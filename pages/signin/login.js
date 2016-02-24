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

let _navigator;

const loginUrl = 'http://192.168.137.1:3000/login';

class ToolBar extends Component{
  constructor(props){
    super(props);
    this.state =  {
      toolBar: {
        title: '登录',
      }
    };
  }

  render() {
    return (
      <View style={{flexDirection: 'row',height:40,}}>
      <View style={{width:60}}>
      <Image source={require('../../res/imgs/backward.png')} style={{width:40,height:40,}}/>
      </View>
      <View style={{flex:1}}>
      <ToolbarAndroid
        title={this.state.toolBar.title}
        titleColor='white'
        onIconClicked={() => {console.log(_navigator); _navigator && _navigator.pop();}}
        style={styles.toolbar}
        contentInsetStart={12}
      >
      </ToolbarAndroid>
      </View>
      </View>
    );
  }
}

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
        console.log(this.state);
        fetch(loginUrl, {
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
          console.log('loginsuccess');})
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
  }

  render() {
    _navigator = this.props.navigator;
    console.log(_navigator);
    return (
      <View style={styles.container}>
        <ToolBar />
        <LoginView />
      </View>
    );
  }
}

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

module.exports = MyComponent;