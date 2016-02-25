'use strict';

import React, {
  Component,
  StyleSheet,
  Navigator,
  BackAndroid,
  View,} from 'react-native';

import Loading from './loading';
import SignIn from './signin/index';
import MainPage from './mainpage';


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

let initialRoute = {id: 'Loading'};
let _navigator;
let RouteMapper = function(route, navigationOperations) {
  _navigator = navigationOperations;

  switch(route.id){
    case 'Loading':
      return (
        <Loading navigator={navigationOperations}/>
      );
      break;
    case 'SignIn':
      return (
        <SignIn navigator={navigationOperations} />
      );
      break;
    case 'MainPage':
      return (
        <MainPage navigator={navigationOperations} />
      );
      break;
    default:
      return (
        <Loading navigator={navigationOperations} />
      );
  }

};

class MyComponent extends  Component{
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render(){
    return (
      <Navigator
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FloatFromLeft}
        renderScene={RouteMapper}
      >
      </Navigator>
    );
  }
}


export default MyComponent;