/**
 * by CntChen 2016.02.26
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Navigator,
  BackAndroid,
  View,} from 'react-native';

import Loading from './loading';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

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

let initialRoute = {name: 'Loading', component: Loading};
let _navigator;
let RouteMapper = function(route, navigationOperations) {
  _navigator = navigationOperations;

  let Component = route.component;
  if(Component) {
    return <Component {...route.params} navigator={_navigator} />
  }
};

class MyComponent extends Component{
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