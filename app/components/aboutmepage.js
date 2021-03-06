/**
 * by CntChen 2016.02.26
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var MyComponent = React.createClass({
  getInitialState: function(){
    var data = [
      {
        title: '心理',
        component: 'MentalityPage',
      },
    ];

    return {
      tabItems: data,
    }
  },

  render: function() {
    return (
      <View style={styles.container}></View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = MyComponent;