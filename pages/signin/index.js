/**
 * by CntChen 2016.01.11
 */

import React, {
  Navigator,
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

var initialRoute = {name: 'Login'};
var RouteMapper = function(route, navigationOperations) {
  _navigator = navigationOperations;

  switch(route.name){
    case 'Home':
      return (
          <Home navigator={navigationOperations} />
      );
      break;
    case 'Register':
      return (
          <Register navigator={navigationOperations} />
      );
      break;
    case 'Login':
      return (
          <Login navigator={navigationOperations} />
      );
      break;
    default:
      return (
          <Home navigator={navigationOperations} />
      );
  }
};

var MyComponent = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={RouteMapper}
      >
      </Navigator>
    );
  }
});


module.exports = MyComponent;
