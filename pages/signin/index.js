/**
 * by CntChen 2016.01.11
 */

import React, {
  Navigator,
  Component,
  BackAndroid,
} from 'react-native';
import Home from './home';
import Register from './register';
import Login from './login';

let _navigator;
let ExitFlag = 0;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    ExitFlag = 0;
    return true;
  }

  ExitFlag++;
  if (ExitFlag >= 2) {
    return false;
  };

  return true;
});

var initialRoute = {id: 'Login'};
var RouteMapper = function(route, navigationOperations) {
  _navigator = navigationOperations;

    if(route.id === 'Home'){
      return (
        <Home navigator={navigationOperations} />
      );
    }
    else if(route.id === 'Register'){
      return (
        <Register navigator={navigationOperations} />
      );
    }
    else if(route.id === 'Login'){
      return (
        <Login navigator={navigationOperations} />
      );
    }
    else{
      return (
        <Home navigator={navigationOperations} />
      );
    }
};


class MyComponent extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <Navigator
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={RouteMapper}
      >
      </Navigator>
    );
  }
}


module.exports = MyComponent;
